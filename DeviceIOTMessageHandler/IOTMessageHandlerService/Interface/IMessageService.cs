using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOTMessageHandlerService.Interface
{
    public interface IMessageService<T> where T :class
    {
        Task SaveAsync(T item);
    }
}
