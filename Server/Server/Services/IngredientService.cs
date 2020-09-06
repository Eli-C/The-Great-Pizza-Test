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
    public class IngredientService : ICrudService<Ingredient>
    {
        private readonly PizzaStoreContext _context;

        public IngredientService(PizzaStoreContext context)
        {
            _context = context;
        }

        public Task Create(Ingredient entity)
        {
            _context.Ingredients.Add(entity);
            return _context.SaveChangesAsync();
        }

        public async Task<Ingredient> Delete(long id)
        {
            var ingredient = await _context.Ingredients.FindAsync(id);

            if (ingredient != null)
            {
                _context.Ingredients.Remove(ingredient);
                await _context.SaveChangesAsync();
            }

            return ingredient;
        }

        public IEnumerable<Ingredient> GetAll()
        {
            return _context.Ingredients;
        }

        public Task<Ingredient> GetById(long id)
        {
            return _context.Ingredients.FindAsync(id);
        }

        public Task Update(long id, Ingredient newEntity)
        {
            _context.Entry(newEntity).State = EntityState.Modified;
            return _context.SaveChangesAsync();
        }

        public bool IngredientExists(long id)
        {
            return _context.Ingredients.Any(e => e.Id == id);
        }
    }
}
