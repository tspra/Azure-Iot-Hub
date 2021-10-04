﻿using IOTDeviceMessageRepository.AppSettings;
using IOTDeviceMessageRepository.Interface;
using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOTDeviceMessageRepository
{
  
        public class CosmosDbContainerFactory : ICosmosDbContainerFactory
        {
            /// <summary>
            ///  Azure Cosmos DB Client
            /// </summary>
            private readonly CosmosClient cosmosClient;
            private readonly string databaseName;
            private readonly List<ContainerInfo> containers;

            /// <summary>
            ///     Ctor
            /// </summary>
            /// <param name="cosmosClient"></param>
            /// <param name="databaseName"></param>
            /// <param name="containers"></param>
            public CosmosDbContainerFactory(CosmosClient cosmosClient,
                                       string databaseName,
                                       List<ContainerInfo> containers)
            {
                this.databaseName = databaseName ?? throw new ArgumentNullException(nameof(databaseName));
                this.containers = containers ?? throw new ArgumentNullException(nameof(containers));
                this.cosmosClient = cosmosClient ?? throw new ArgumentNullException(nameof(cosmosClient));
            }

            public ICosmosDbContainer GetContainer(string containerName)
            {
                if (containers.Where(x => x.Name == containerName) == null)
                {
                    throw new ArgumentException($"Unable to find container: {containerName}");
                }

                return new CosmosDbContainer(cosmosClient, databaseName, containerName);
            }

            public async Task EnsureDbSetupAsync()
            {
            try
            {
                Microsoft.Azure.Cosmos.DatabaseResponse database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseName);

                foreach (ContainerInfo container in containers)
                {
                    await database.Database.CreateContainerIfNotExistsAsync(container.Name, $"{container.PartitionKey}");
                }
            }
            catch(Exception ex)
            {

            }
                
            }
        }
    }

