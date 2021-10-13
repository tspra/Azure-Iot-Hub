
using IOTMessageContext.Interface;
using IOTMessageHandlerService.Interface;
using IOTModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOTMessageHandlerService
{
    public class TemperatureService : ITemperatureService
    {
        private readonly ITemperatureContext temperatureMessageContext;
        public TemperatureService(ITemperatureContext temperatureMessageContext)
        {
            this.temperatureMessageContext = temperatureMessageContext;
        }

        public Task<List<Temperature>> GetItems()
        {
            throw new NotImplementedException();
        }

        public async Task SaveAsync(IOTModels.Temperature item)
        {
            await this.temperatureMessageContext.AddItemAsync(item);
        }
    }
}
