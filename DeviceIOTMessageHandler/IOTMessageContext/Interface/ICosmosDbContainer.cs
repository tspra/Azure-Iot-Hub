using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Text;

namespace IOTDeviceMessageRepository.Interface
{
    public interface ICosmosDbContainer
    {
        Container container { get; }
    }
}
