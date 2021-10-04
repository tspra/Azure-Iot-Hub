

using DependencyInjectionFunctions;
using IOTMessageContext;
using IOTMessageContext.Interface;
using IOTMessageHandler.Config;
using IOTMessageHandlerService;
using IOTMessageHandlerService.Interface;
using IOTModels;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(Startup))]
namespace DependencyInjectionFunctions
{
    public class Startup : FunctionsStartup
    {
      
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddSingleton<ITemperatureService, TemperatureService>();
            builder.SetupCosmosDb();
            builder.Services.AddLogging();
           
        }
    }
}