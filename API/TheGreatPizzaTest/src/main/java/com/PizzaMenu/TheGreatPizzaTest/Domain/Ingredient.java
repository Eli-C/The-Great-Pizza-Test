package com.PizzaMenu.TheGreatPizzaTest.Domain;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "INGREDIENT")
public class Ingredient {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
	private String name;
    
	@JsonIgnore
    @ManyToMany(mappedBy = "ingredients", fetch = FetchType.EAGER)
    
    @OnDelete(action = OnDeleteAction.CASCADE)
    
    private Set<Pizza> pizzas = new HashSet<>();
    
    
    public Ingredient() {
    	
    }
    
    public Ingredient(Integer id, String name) {
    	this.id = id;
    	this.name = name;
    }
    
    public Ingredient(String name) {
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

	public Set<Pizza> getPizzas() {
		return pizzas;
	}

	@Override
    public String toString() {
        return "Ingredient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pizzas='" + pizzas.stream().map(Pizza::getName).collect(Collectors.toList()) + '\'' +
                '}';
    }
    
}
