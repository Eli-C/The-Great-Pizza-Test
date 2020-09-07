import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent implements OnInit {

  public pizza : Pizza;

  constructor(private pizzaService : PizzaService) { 
  }

  ngOnInit(): void {
    this.pizza = new Pizza();
  }

  savePizza(event : any) {
    this.pizza.name = event.name;
    this.pizza.ingredients = event.ingredients;

    this.pizzaService.createPizza(this.pizza).subscribe(res => {
      console.log("New pizza added. ", res)
    });
  }

}
