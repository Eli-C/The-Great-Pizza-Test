import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.css']
})
export class EditPizzaComponent implements OnInit {

  private routeSub: Subscription;
  public pizza: Pizza;
  public ingredientsControl: FormControl;

  constructor(private pizzaService: PizzaService, private route: ActivatedRoute, private snackBar: MatSnackBar) {
   }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const pizzaId = params['id'];
      this.pizzaService.getPizzaById(pizzaId).subscribe(res => {
        this.pizza = res;
        this.ingredientsControl = new FormControl(res.ingredients);
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  updateEntity() {
    const newPizza = new Pizza();
    newPizza.id = this.pizza.id;
    newPizza.name = this.pizza.name;
    newPizza.ingredients = this.ingredientsControl.value;
    this.pizzaService.updatePizza(newPizza.id, newPizza).subscribe(res => {
      this.snackBar.open("Your Pizza was Edited", "Accept", {
        duration: 3000,
      });
    });
  }

}
