import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-pizzas-list',
  templateUrl: './view-pizzas-list.component.html',
  styleUrls: ['./view-pizzas-list.component.css']
})
export class ViewPizzasListComponent implements OnInit {

  public pizzas : Pizza[];

  constructor(private pizzaService : PizzaService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.pizzaService.getAllPizzas().subscribe(res => {
      this.pizzas = res;
    });
  }

  getDescriptionForPizza = (pizza: Pizza): string => {
    const defaultMsg = `The pizza ${pizza.name} contains the following ingredients: `;
    return defaultMsg + pizza.ingredients.map(ingredient => ingredient.name).join(", ");
  }

  pizzaEditClicked(pizzaToEdit: Pizza) {
    this.router.navigate([`/editPizzas/${pizzaToEdit.id}`])
  }
}
