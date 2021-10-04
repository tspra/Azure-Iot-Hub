using DependencyInjectionFunctions;
using IOTDeviceMessage.Config;
using IOTMessageHandlerService;
using IOTMessageHandlerService.Interface;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

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
