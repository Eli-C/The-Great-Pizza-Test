using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Domain
{
    public class Ingredient
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public Ingredient(long id, string name, double price)
        {
            this.Id = id;
            this.Name = name;
            this.Price = price;
        }
    }
}
