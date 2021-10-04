using Microsoft.Azure.Devices;
using Microsoft.Azure.Devices.Client;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;


namespace ConsoleappIoT
{
    class Program
    {
      
        private const string DeviceConnectionString = "HostName=deviceiothubdemo.azure-devices.net;DeviceId=mydevice;SharedAccessKey=Sr/eg3QUDnb602VZHZnSsnhCghqf6K+yiyN9DMtvAcE=";
        private const string iotConnectionString = "HostName=deviceiothubdemo.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=5p+cZFIdfhz3TaeaICF+MSq1qidOwPkO8QfJdI7unk4=";
        static ServiceClient serviceClient;
        static DeviceClient deviceClient;

        static void Main(string[] args)
        {
            serviceClient = ServiceClient.CreateFromConnectionString(iotConnectionString);
            Program program = new Program();
        }

        public Program()
        {
            deviceClient = DeviceClient.CreateFromConnectionString(DeviceConnectionString);
            SendEvent().Wait();
            ReceiveCommands(deviceClient).Wait();
        }

        //This method is responsible for sending the Event to the IoT Hub
        static async Task SendEvent()
        {
            Console.WriteLine("\n Device simulator data  to IoT Hub....\n");
            for (int i = 0; i <35; i++)
            {
                double minTemperature = 20;
                double minHumidity = 60;
                var rand = new Random();
                double currentTemperature = minTemperature + rand.NextDouble() * 15;
                double currentHumidity = minHumidity + rand.NextDouble() * 20;
                var jsontext = new
                {
                    temperature = currentTemperature,
                    humidity = currentHumidity,
                    deviceId = rand.Next().ToString()
                };
                var data = JsonConvert.SerializeObject(jsontext);
                var message = new Microsoft.Azure.Devices.Client.Message(Encoding.UTF8.GetBytes(data));
                await deviceClient.SendEventAsync(message);
                Thread.Sleep(1000);

            }

        }
     
        //This method is responsible to receive the message on the IoT Hub
        async Task ReceiveCommands(DeviceClient deviceClient)
        {
            Console.WriteLine("\n IoT hub received message from device....\n");
            Microsoft.Azure.Devices.Client.Message receivedMessage;
            string messageData;
            while (true)
            {
               
                receivedMessage = await deviceClient.ReceiveAsync(TimeSpan.FromSeconds(1));
                if (receivedMessage != null)
                {
                    messageData = Encoding.ASCII.GetString(receivedMessage.GetBytes());
                    Console.WriteLine("\t{0}> Message received: {1}", DateTime.Now.ToLocalTime(), messageData);
                    await deviceClient.CompleteAsync(receivedMessage);
                }
            }
        }
    }
}
