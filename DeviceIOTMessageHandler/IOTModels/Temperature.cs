using IOTDeviceMessageModel.Base;
using Newtonsoft.Json;
using System;

namespace IOTModels
{
    public class Temperature : BaseEntity
    {
        public double temperature { get; set; }
        public double humidity { get; set; }

        [JsonProperty(PropertyName = "deviceId")]
        public string deviceId { get; set; }
    }
}
