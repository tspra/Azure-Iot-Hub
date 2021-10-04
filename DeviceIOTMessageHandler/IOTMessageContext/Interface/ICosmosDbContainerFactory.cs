using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IOTDeviceMessageRepository.Interface
{
    public interface ICosmosDbContainerFactory
    {
        ICosmosDbContainer GetContainer(string containerName);

        Task EnsureDbSetupAsync();
    }
}
