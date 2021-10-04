using IOTDeviceMessageRepository.AppSettings;
using IOTDeviceMessageRepository.Extensions;
using IOTMessageContext;
using IOTMessageContext.Interface;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;

namespace IOTDeviceMessage.Config
{
    public static class DatabaseConfig
    {
        /// <summary>
        ///  Setup Cosmos DB
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration"></param>
        public static void SetupCosmosDb(this IFunctionsHostBuilder builder)
        {
            var key = Environment.GetEnvironmentVariable("CosmosPrimaryKey");
            var database = Environment.GetEnvironmentVariable("DatabaseName");
            var endpoint = Environment.GetEnvironmentVariable("CosmosEndpointUrl");
            CosmosDBSetting cosmosDBSetting = new CosmosDBSetting(key,endpoint,database);
            // register CosmosDB client and data repositories
            builder.AddCosmosDb(endpoint,
                                 key,
                              database,
                                new List<ContainerInfo> { new ContainerInfo { Name = "message" , PartitionKey = "/deviceId" }  });
            builder.Services.AddSingleton<ITemperatureContext, TemperatureContext>();
        }
    }
}
