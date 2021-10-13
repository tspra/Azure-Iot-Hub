
using IOTDeviceMessageModel;
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
    public class PatientService : IPatientService
    {
        private readonly IPatientContext patientMessageContext;
        public PatientService(IPatientContext patientContext)
        {
            this.patientMessageContext = patientContext;
        }

        public async Task<List<Patient>> GetItems()
        {
            return await this.patientMessageContext.GetItems();
        }

        public Task SaveAsync(Patient item)
        {
            throw new NotImplementedException();
        }
    }
}
