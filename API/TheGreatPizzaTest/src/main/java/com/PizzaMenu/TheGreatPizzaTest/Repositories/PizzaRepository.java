package com.PizzaMenu.TheGreatPizzaTest.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.PizzaMenu.TheGreatPizzaTest.Domain.Pizza;

@Repository
public interface PizzaRepository extends CrudRepository<Pizza, Integer> {

}
