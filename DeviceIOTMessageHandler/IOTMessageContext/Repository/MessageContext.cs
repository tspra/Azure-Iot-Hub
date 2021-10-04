using IOTDeviceMessageModel.Base;
using IOTDeviceMessageRepository.Interface;
using IOTMessageContext.Interface;
using IOTModels;
using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IOTMessageContext
{
    public abstract class MessageContext<T> : IMessageContext<T> where T : BaseEntity
    {
        public abstract string ContainerName { get; }
        public abstract string GenerateId(T entity);
        public abstract PartitionKey ResolvePartitionKey(T entity);
        private readonly ICosmosDbContainerFactory cosmosDbContainerFactory;
        private readonly Microsoft.Azure.Cosmos.Container container;

        public MessageContext(ICosmosDbContainerFactory cosmosDbContainerFactory)
        {
            this.cosmosDbContainerFactory = cosmosDbContainerFactory ?? throw new ArgumentNullException(nameof(ICosmosDbContainerFactory));
            this.container = this.cosmosDbContainerFactory.GetContainer(ContainerName).container;
        }
        public async Task AddItemAsync(T item)
        {
            try
            {
                item.Id = GenerateId(item);
                await container.CreateItemAsync<T>(item, ResolvePartitionKey(item));
            }
            catch(Exception ex)
            {

            }
        }

        public Task DeleteItemAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<T> GetItemAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateItemAsync(string id, T item)
        {
            throw new NotImplementedException();
        }
    }
}
