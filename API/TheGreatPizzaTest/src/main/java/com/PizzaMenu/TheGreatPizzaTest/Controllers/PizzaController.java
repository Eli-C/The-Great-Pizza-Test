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

import com.PizzaMenu.TheGreatPizzaTest.Domain.Pizza;
import com.PizzaMenu.TheGreatPizzaTest.Services.PizzaService;

@RestController
@RequestMapping(path = "/pizzas")
public class PizzaController {
	
	@Autowired 
	PizzaService pizzaService;
	
	@GetMapping("/")
    public @ResponseBody Iterable<Pizza> getAllPizzas() {
        return pizzaService.getAll();
    }

    @GetMapping("/{id}")
    public @ResponseBody Pizza getPizzaById(@PathVariable Integer id){
        return pizzaService.getById(id);
    }

    @PostMapping("/")
    public @ResponseBody Pizza addPizza(@RequestBody Pizza pizza) {
    	return pizzaService.add(pizza);
    }

    @PutMapping("/{id}")
    public @ResponseBody Pizza updatePizza(@PathVariable Integer id, @RequestBody Pizza pizza) {
    	return pizzaService.update(id, pizza);
    }

    @DeleteMapping("/{id}")
    public void deletePizza(@PathVariable Integer id) {
    	pizzaService.delete(id);
    }

}
