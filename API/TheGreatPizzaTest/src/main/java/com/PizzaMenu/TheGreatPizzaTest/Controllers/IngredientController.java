package com.PizzaMenu.TheGreatPizzaTest.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.PizzaMenu.TheGreatPizzaTest.Domain.Ingredient;
import com.PizzaMenu.TheGreatPizzaTest.Services.IngredientService;


@RestController
@RequestMapping(path = "/ingredients")
public class IngredientController {
	
	@Autowired 
	IngredientService ingredientService;
	
	@GetMapping("/")
    public @ResponseBody Iterable<Ingredient> getAllIngredients() {
        return ingredientService.getAll();
    }

    @GetMapping("/{id}")
    public @ResponseBody Ingredient getIngredientById(@PathVariable Integer id){
        return ingredientService.getById(id);
    }

    @PostMapping("/")
    public @ResponseBody Ingredient addIngredient(@RequestBody Ingredient ingredient) {
    	return ingredientService.add(ingredient);
    }

    @PutMapping("/{id}")
    public @ResponseBody Ingredient updateIngredient(@PathVariable Integer id, @RequestBody Ingredient ingredient) {
    	return ingredientService.update(id, ingredient);
    }

    @DeleteMapping("/{id}")
    public void deleteIngredient(@PathVariable Integer id) {
    	ingredientService.delete(id);
    }
}
