package com.PizzaMenu.TheGreatPizzaTest.Services;

import org.springframework.stereotype.Service;

import com.PizzaMenu.TheGreatPizzaTest.Domain.Ingredient;
import com.PizzaMenu.TheGreatPizzaTest.Domain.Pizza;
import com.PizzaMenu.TheGreatPizzaTest.Repositories.PizzaRepository;

@Service
public class PizzaService extends BaseService<PizzaRepository, Pizza> {
	
}
