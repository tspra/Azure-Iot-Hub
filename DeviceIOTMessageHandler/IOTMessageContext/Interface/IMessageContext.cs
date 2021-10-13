using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IOTMessageContext.Interface
{
   public interface IMessageContext<T> where T :class
    {
        Task<T> GetItemAsync(string id);
        Task AddItemAsync(T item);
        Task UpdateItemAsync(string id, T item);
        Task DeleteItemAsync(string id);
        Task<List<T>> GetItems();
    }
}
