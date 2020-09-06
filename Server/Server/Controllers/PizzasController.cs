using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Domain;
using Server.Repositories;
using Server.Services;

namespace Server.Controllers
{
    [Route("api/pizzas")]
    [ApiController]
    public class PizzasController : ControllerBase
    {
        private readonly PizzaService _pizzaService;

        public PizzasController(PizzaService pizzaService)
        {
            _pizzaService = pizzaService;
        }

        // GET: api/Pizzas
        [HttpGet]
        public IEnumerable<Pizza> GetPizzas()
        {
            return _pizzaService.GetAll();
        }

        // GET: api/Pizzas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPizza([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pizza = await _pizzaService.GetById(id);

            if (pizza == null)
            {
                return NotFound();
            }

            return Ok(pizza);
        }

        // PUT: api/Pizzas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPizza([FromRoute] long id, [FromBody] Pizza pizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pizza.Id)
            {
                return BadRequest();
            }

            try
            {
                await _pizzaService.Update(id, pizza);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_pizzaService.PizzaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(pizza);
        }

        // POST: api/Pizzas
        [HttpPost]
        public async Task<IActionResult> PostPizza([FromBody] Pizza pizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _pizzaService.Create(pizza);

            return CreatedAtAction("GetPizza", new { id = pizza.Id }, pizza);
        }

        // DELETE: api/Pizzas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePizza([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pizza = await _pizzaService.Delete(id);
            if (pizza == null)
            {
                return NotFound();
            }

            return Ok(pizza);
        }

    }
}