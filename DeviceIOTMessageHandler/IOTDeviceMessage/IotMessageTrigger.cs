using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using IOTMessageHandlerService.Interface;
using IOTModels;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace IOTDeviceMessage
{
    public class IotMessageTrigger
    {
        private readonly ITemperatureService temperatureService;

        public IotMessageTrigger(ITemperatureService temperatureService)
        {
            this.temperatureService = temperatureService;
        }

        [FunctionName("IotMessageTrigger")]
        public void Run([BlobTrigger("messages/{name}", Connection = "AzureStorageAccount")] Stream myBlob, string name, ILogger log)
        {
            log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");
            using (StreamReader r = new StreamReader(myBlob))
            {
                string json = r.ReadLine();
                Temperature items = JsonConvert.DeserializeObject<Temperature>(json);
                this.temperatureService.SaveAsync(items);

            }
        }

    }
}
