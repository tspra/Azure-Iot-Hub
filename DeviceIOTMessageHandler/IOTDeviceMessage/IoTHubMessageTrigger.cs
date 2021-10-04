using IoTHubTrigger = Microsoft.Azure.WebJobs.EventHubTriggerAttribute;

using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Azure.EventHubs;
using System.Text;
using System.Net.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System;
using IOTModels;

namespace IOTDeviceMessage
{
    public static class IoTHubMessageTrigger
    {

        [FunctionName("IoTHubTrigger")]
        public static async Task Run(
            [IoTHubTrigger("messages/events", Connection = "IoTHubTriggerConnection",
            ConsumerGroup = "devicewebapp")]EventData message,
            [SignalR(HubName = "broadcast")] IAsyncCollector<SignalRMessage> signalRMessages,
            ILogger log)
        {
            var deviceData = JsonConvert.DeserializeObject<Temperature>(Encoding.UTF8.GetString(message.Body.Array));
            deviceData.deviceId = Convert.ToString(message.SystemProperties["iothub-connection-device-id"]);


            log.LogInformation($"C# IoT Hub trigger function processed a message: {JsonConvert.SerializeObject(deviceData)}");
            await signalRMessages.AddAsync(new SignalRMessage()
            {
                Target = "notify",
                Arguments = new[] { JsonConvert.SerializeObject(deviceData) }
            });
        }
    }
}