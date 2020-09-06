using Microsoft.EntityFrameworkCore;
using Server.Domain;
using Server.Interfaces;
using Server.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class PizzaService : ICrudService<Pizza>
    {
        private readonly PizzaStoreContext _context;

        public PizzaService(PizzaStoreContext context)
        {
            _context = context;
        }
        public Task Create(Pizza entity)
        {
            _context.Pizzas.Add(entity);
            return _context.SaveChangesAsync();
        }

        public async Task<Pizza> Delete(long id)
        {
            var pizza = await _context.Pizzas.FindAsync(id);
            if (pizza != null)
            {
                _context.Pizzas.Remove(pizza);
                await _context.SaveChangesAsync();
            }

            return pizza;
        }

        public IEnumerable<Pizza> GetAll()
        {
            return _context.Pizzas.Include(p => p.Ingredients);
        }

        public Task<Pizza> GetById(long id)
        {
            return _context.Pizzas.Include(p => p.Ingredients).FirstOrDefaultAsync(p => p.Id == id);
        }

        public Task Update(long id, Pizza newEntity)
        {
            _context.Entry(newEntity).State = EntityState.Modified;
            return _context.SaveChangesAsync();
        }

        public bool PizzaExists(long id)
        {
            return _context.Pizzas.Any(e => e.Id == id);
        }
    }
}
