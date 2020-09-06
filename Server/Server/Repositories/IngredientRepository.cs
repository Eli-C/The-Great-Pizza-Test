using Microsoft.EntityFrameworkCore;
using Server.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories
{
    public class IngredientRepository : DbContext
    {
        public IngredientRepository(DbContextOptions<IngredientRepository> options) : base(options)
        {
        }

        public DbSet<Ingredient> Ingredients { get; set; }
    }
}
