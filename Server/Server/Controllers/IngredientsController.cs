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
    [Route("api/ingredients")]
    [ApiController]
    public class IngredientsController : ControllerBase
    {
        private readonly IngredientService _ingredientService;

        public IngredientsController(IngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        // GET: api/Ingredients
        [HttpGet]
        public IEnumerable<Ingredient> GetIngredients()
        {
            return _ingredientService.GetAll();
        }

        // GET: api/Ingredients/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetIngredient([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ingredient = await _ingredientService.GetById(id);

            if (ingredient == null)
            {
                return NotFound();
            }

            return Ok(ingredient);
        }

        // PUT: api/Ingredients/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIngredient([FromRoute] long id, [FromBody] Ingredient ingredient)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ingredient.Id)
            {
                return BadRequest();
            }

            try
            {
                await _ingredientService.Update(id, ingredient);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_ingredientService.IngredientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(ingredient);
        }

        // POST: api/Ingredients
        [HttpPost]
        public async Task<IActionResult> PostIngredient([FromBody] Ingredient ingredient)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _ingredientService.Create(ingredient);

            return CreatedAtAction("GetIngredient", new { id = ingredient.Id }, ingredient);
        }

        // DELETE: api/Ingredients/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIngredient([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ingredient = await _ingredientService.Delete(id);
            if (ingredient == null)
            {
                return NotFound();
            }

            return Ok(ingredient);
        }

    }
}