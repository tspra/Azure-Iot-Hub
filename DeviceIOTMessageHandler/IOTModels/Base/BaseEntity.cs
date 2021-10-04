using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace IOTDeviceMessageModel.Base
{
    public abstract class BaseEntity
    {
        [JsonProperty(PropertyName = "id")]
        public virtual string Id { get; set; }
    }
}
