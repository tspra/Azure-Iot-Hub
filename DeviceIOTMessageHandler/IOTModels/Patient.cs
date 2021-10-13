using IOTDeviceMessageModel.Base;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace IOTDeviceMessageModel
{
    public class Patient : BaseEntity
    {

        public string Name { get; set; }
        public int  Age { get; set; }

        [JsonProperty(PropertyName = "patientId")]
        public string patientId { get; set; }

    }
}
