using IOTDeviceMessageRepository.Interface;
using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Text;

namespace IOTDeviceMessageRepository
{
    public class CosmosDbContainer : ICosmosDbContainer
    {
        public Container container { get; }
        public CosmosDbContainer(CosmosClient cosmosClient,
                                 string databaseName,
                                 string containerName)
        {
            this.container = cosmosClient.GetContainer(databaseName, containerName);
        }
    }
}
