using IOTDeviceMessageModel;
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
    public class PatientContext : MessageContext<Patient>, IPatientContext
    {
        
        public override string ContainerName => "patients";
        private readonly ICosmosDbContainerFactory cosmosDbContainerFactory;
        private readonly Microsoft.Azure.Cosmos.Container container;

        public PatientContext(ICosmosDbContainerFactory factory) : base(factory)
        {
            this.cosmosDbContainerFactory = factory ?? throw new ArgumentNullException(nameof(ICosmosDbContainerFactory));
            this.container = factory.GetContainer(ContainerName).container;
        }

        public override string GenerateId(Patient entity)
        {
            entity.patientId = Guid.NewGuid().ToString();
            return entity.patientId;
        }

        public override PartitionKey ResolvePartitionKey(Patient entity)
        {
            return new PartitionKey(entity.patientId);
        }
    }
}
