package com.PizzaMenu.TheGreatPizzaTest.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.PizzaMenu.TheGreatPizzaTest.Domain.Ingredient;


@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {

}
