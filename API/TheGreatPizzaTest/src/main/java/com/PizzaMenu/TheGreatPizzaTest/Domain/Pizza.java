package com.PizzaMenu.TheGreatPizzaTest.Domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "PIZZA")
public class Pizza {
	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	
	@ManyToMany(mappedBy = "pizzas", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	private Set<Ingredient> ingredients = new HashSet<>();
	
	public Pizza() {
		
	}
	
	public Pizza(Integer id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public Pizza(String name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Ingredient> getIngredients() {
		return ingredients;
	}

	public void addIngredient(Ingredient ingredient) {
		ingredients.add(ingredient);
		ingredient.getPizzas().add(this);
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
	
}
