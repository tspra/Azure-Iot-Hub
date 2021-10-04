using IOTMessageHandlerService.Interface;
using IOTModels;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace IOTMessageHandler
{
 
    public  class IotMessageBlobTrigger
    {
        private readonly ITemperatureService temperatureService;

        public IotMessageBlobTrigger(ITemperatureService temperatureService)
        {
            this.temperatureService = temperatureService;
        }

        [FunctionName("IotMessageBlobTrigger")]
        public  void Run([BlobTrigger("messages/{name}", Connection = "AzureStorageAccount")] Stream myBlob, string name, ILogger log)
        {
            log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");
            using (StreamReader r = new StreamReader(myBlob))
            {
                string json = r.ReadToEnd();
                Temperature items = JsonConvert.DeserializeObject<Temperature>(json);
                this.temperatureService.Save(items);
               
            }
        }
    }
}
