using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Interfaces
{
    public interface ICrudService<T>
    {
        List<T> GetAll();

        T GetById(long id);

        void Create(T entity);

        void Update(long id, T newEntity);

        void Delete(long id);
    }
}
