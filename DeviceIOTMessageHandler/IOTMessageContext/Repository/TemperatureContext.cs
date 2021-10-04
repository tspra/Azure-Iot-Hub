using IOTDeviceMessageRepository.Interface;
using IOTMessageContext.Interface;
using IOTModels;
using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Text;

namespace IOTMessageContext
{
    public class TemperatureContext : MessageContext<Temperature>, ITemperatureContext
    {
        
        public override string ContainerName => "message";

        
        public TemperatureContext(ICosmosDbContainerFactory factory) : base(factory)
        {
        }

        public override string GenerateId(Temperature entity)
        {
            entity.Id = Guid.NewGuid().ToString();
            return entity.Id;
        }

        public override PartitionKey ResolvePartitionKey(Temperature entity)
        {
            return new PartitionKey(entity.deviceId);
        }
    }
}
