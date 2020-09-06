using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Domain
{
    public class PizzaBuilder
    {
        private string Name;
        private IList<Ingredient> Ingredients = new List<Ingredient>();
        private double Price;

        public PizzaBuilder()
        {

        }

        public PizzaBuilder SetName(string Name)
        {
            this.Name = Name;
            return this;
        }

        public PizzaBuilder AddIngredient(Ingredient ingredient)
        {
            this.Ingredients.Add(ingredient);
            this.Price = Price + ingredient.Price;
            return this;
        }

        public Pizza MakePizza()
        {
            return new Pizza(this.Name, this.Ingredients, this.Price);
        }

    }
}
