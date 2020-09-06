using Server.Domain;
using Server.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class PizzaService : ICrudService<Pizza>
    {
        public void Create(Pizza entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(long id)
        {
            throw new NotImplementedException();
        }

        public List<Pizza> GetAll()
        {
            throw new NotImplementedException();
        }

        public Pizza GetById(long id)
        {
            throw new NotImplementedException();
        }

        public void Update(long id, Pizza newEntity)
        {
            throw new NotImplementedException();
        }
    }
}
