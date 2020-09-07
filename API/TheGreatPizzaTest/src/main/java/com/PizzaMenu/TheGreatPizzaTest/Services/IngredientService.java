package com.PizzaMenu.TheGreatPizzaTest.Services;

import org.springframework.stereotype.Service;

import com.PizzaMenu.TheGreatPizzaTest.Domain.Ingredient;
import com.PizzaMenu.TheGreatPizzaTest.Repositories.IngredientRepository;

@Service
public class IngredientService extends BaseService<IngredientRepository, Ingredient> {

}
