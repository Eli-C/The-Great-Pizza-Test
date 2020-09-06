using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Interfaces
{
    public interface ICrudService<T>
    {
        IEnumerable<T> GetAll();

        Task<T> GetById(long id);

        Task Create(T entity);

        Task Update(long id, T newEntity);

        Task<T> Delete(long id);
    }
}
