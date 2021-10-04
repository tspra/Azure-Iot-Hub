using IOTMessageContext.Interface;
using IOTMessageHandlerService;
using IOTModels;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Threading.Tasks;

namespace IOTDeviceMessageServiceTest
{
    [TestClass]
    public class TemperatureServiceTest
    {
        [TestMethod]
        public void Should_Save_Temperature()
        {
            // Arrange

            Mock<ITemperatureContext> temperatureContext = new Mock<ITemperatureContext>();
            temperatureContext.Setup(x => x.AddItemAsync(It.IsAny<Temperature>())).Returns(Task.FromResult(default(object)));
            var service = new TemperatureService(temperatureContext.Object);

            // Act
            var result = service.SaveAsync(new Temperature());

            //Assert

            Assert.IsNotNull(result);
        }
        [TestMethod]
        public void Should_Not_Save_Temperature()
        {
            // Arrange

            Mock<ITemperatureContext> temperatureContext = new Mock<ITemperatureContext>();
            temperatureContext.Setup(x => x.AddItemAsync(It.IsAny<Temperature>())).Returns(Task.FromResult<Temperature>(null));
            var service = new TemperatureService(temperatureContext.Object);

            // Act
            var result = service.SaveAsync(new Temperature());

            //Assert

            Assert.IsNull(result);
        }
    }
}
