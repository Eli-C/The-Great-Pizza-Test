using Microsoft.EntityFrameworkCore;
using Server.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories
{
    public class PizzaStoreContext : DbContext
    {
        public PizzaStoreContext(DbContextOptions<PizzaStoreContext> options) : base(options)
        {
        }

        public DbSet<Pizza> Pizzas { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pizza>()
                .HasMany(p => p.Ingredients)
                .WithOne();
        }
    }
}
