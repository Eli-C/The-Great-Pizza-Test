import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-add-ingredients-to-pizza',
  templateUrl: './add-ingredients-to-pizza.component.html',
  styleUrls: ['./add-ingredients-to-pizza.component.css']
})
export class AddIngredientsToPizzaComponent {

  @Input() pizzaName: string;
  @Input() ingredientList: Ingredient[];

  @Input() ingredientsControl;


  oningredientRemoved(ingredient: Ingredient) {
    const ingredients = this.ingredientsControl.value as Ingredient[];
    this.removeIngredient(ingredients, ingredient);
    this.ingredientsControl.setValue(ingredients);
  }

  private removeIngredient(ingredients: Ingredient[], ingredientToRemove: Ingredient): void {
    const index = ingredients.indexOf(ingredientToRemove);
    if (index !== -1) {
      ingredients.splice(index, 1);
    }
  }

}


