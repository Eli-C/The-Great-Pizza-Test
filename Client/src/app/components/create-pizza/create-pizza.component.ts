import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent implements OnInit {

  public pizza : Pizza;

  constructor(private pizzaService : PizzaService, private snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
    this.pizza = new Pizza();
  }

  savePizza(event : any) {
    this.pizza.name = event.name;
    this.pizza.ingredients = event.ingredients;

    this.pizzaService.createPizza(this.pizza).subscribe(res => {
      this.snackBar.open("New pizza added", "Accept", {
        duration: 3000,
      });
    });
  }

}
