import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-pizzas-list',
  templateUrl: './view-pizzas-list.component.html',
  styleUrls: ['./view-pizzas-list.component.css']
})
export class ViewPizzasListComponent implements OnInit {

  public pizzas : Pizza[];

  constructor(private pizzaService : PizzaService, private router: Router, private snackBar: MatSnackBar) { 
    
  }

  ngOnInit(): void {
    this.retrievePizzas();
  }

  retrievePizzas() {
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

  pizzaDeleteClicked(pizzaToEdit: Pizza) {
    this.pizzaService.deletePizza(pizzaToEdit.id).subscribe(res => {
      this.retrievePizzas();
      this.snackBar.open("Pizza was Deleted", "Accept", {
        duration: 3000,
      });
    });
  }

}
