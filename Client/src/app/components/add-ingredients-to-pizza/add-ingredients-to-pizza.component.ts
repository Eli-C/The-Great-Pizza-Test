import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-ingredients-to-pizza',
  templateUrl: './add-ingredients-to-pizza.component.html',
  styleUrls: ['./add-ingredients-to-pizza.component.css']
})
export class AddIngredientsToPizzaComponent implements OnInit {

  @Input() pizzaName: string;
  @Input() ingredientsControl: FormControl;

  public ingredientList: Ingredient[];

  constructor(private ingredientService: IngredientService){}

  ngOnInit(): void {
    this.ingredientService.getAllIngredients().subscribe(res => {
      this.ingredientList = res;
      const currentIngredients = this.ingredientsControl.value;
      let ingredientsToUpdate = [];
      currentIngredients.forEach(ingredient => {
        const foundIngredient = this.ingredientList.find(ingredientFromDb => ingredientFromDb.id === ingredient.id);
        if (foundIngredient) {
          ingredientsToUpdate.push(foundIngredient);
        }
      });
      this.ingredientsControl.setValue(ingredientsToUpdate);
    });
  }

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


