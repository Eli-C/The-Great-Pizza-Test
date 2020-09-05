using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Domain
{
    public class Pizza
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public IList<Ingredient> Ingredients { get; set; }
        public double Price { get; set; }

        public Pizza(long id, string name, IList<Ingredient> ingredients, double price)
        {
            this.Id = id;
            this.Name = name;
            this.Ingredients = ingredients;
            this.Price = price;
        }
    }
}
