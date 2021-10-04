using IOTDeviceMessageRepository;
using IOTDeviceMessageRepository.Interface;
using IOTMessageContext;
using IOTModels;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;

namespace IOTDeviceMessageRepositoryTest.Repository
{
    [TestClass]
    public class MessageContextTest
    {
        [TestMethod]
        public void Temperature_Context_Should_Save_Temperature()
        {
            // Arrange

            Mock<ICosmosDbContainerFactory> factory = new Mock<ICosmosDbContainerFactory>();
            Mock<ICosmosDbContainer> container = new Mock<ICosmosDbContainer>();
            factory.Setup(x => x.GetContainer(It.IsAny<string>())).Returns(container.Object);
            var context = new TemperatureContext(factory.Object);

            // Act
            var result = context.AddItemAsync(new Temperature());

            //Assert

            Assert.IsNotNull(result);
        }
    }
}
