using IOTDeviceMessageRepository.AppSettings;
using IOTDeviceMessageRepository.Extensions;
using IOTMessageContext;
using IOTMessageContext.Interface;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace IOTMessageHandler.Config
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
          
            var endpoint = Environment.GetEnvironmentVariable("CosmosUrl");
            var key = Environment.GetEnvironmentVariable("Cosmoskey");
            var database = Environment.GetEnvironmentVariable("CosmosDatabaseName");
            // Bind database-related bindings
            // CosmosDBSetting cosmosDbConfig = null.GetSection("ConnectionStrings:CleanArchitectureCosmosDB").Get<CosmosDBSetting>();
            // register CosmosDB client and data repositories
            builder.AddCosmosDb(endpoint,
                                 key,
                               database,
                                 null);
            builder.Services.AddScoped<ITemperatureContext, TemperatureContext>();
        }
    }
}
