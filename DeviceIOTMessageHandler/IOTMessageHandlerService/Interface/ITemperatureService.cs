using IOTModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOTMessageHandlerService.Interface
{
    public interface ITemperatureService : IMessageService<Temperature>
    {
    }
}
