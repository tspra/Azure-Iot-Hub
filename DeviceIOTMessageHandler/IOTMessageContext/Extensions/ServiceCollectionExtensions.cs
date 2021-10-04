using IOTDeviceMessageRepository.AppSettings;
using IOTDeviceMessageRepository.Interface;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace IOTDeviceMessageRepository.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IFunctionsHostBuilder AddCosmosDb(this IFunctionsHostBuilder builder,
                                                     string endpointUrl,
                                                     string primaryKey,
                                                     string databaseName,
                                                     List<ContainerInfo> containers)
        {
            Microsoft.Azure.Cosmos.CosmosClient client = new Microsoft.Azure.Cosmos.CosmosClient(endpointUrl, primaryKey);
            CosmosDbContainerFactory cosmosDbClientFactory = new CosmosDbContainerFactory(client, databaseName, containers);
            builder.Services.AddSingleton<ICosmosDbContainerFactory>(cosmosDbClientFactory);
            return builder;
        }

    }
}
