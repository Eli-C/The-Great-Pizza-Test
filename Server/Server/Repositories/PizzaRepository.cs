using Microsoft.EntityFrameworkCore;
using Server.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Repositories
{
    public class PizzaRepository : DbContext
    {
        public PizzaRepository(DbContextOptions<PizzaRepository> options) : base(options)
        {
        }

        public DbSet<Pizza> Pizzas { get; set; }
    }
}
