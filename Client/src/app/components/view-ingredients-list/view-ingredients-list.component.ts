import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-ingredients-list',
  templateUrl: './view-ingredients-list.component.html',
  styleUrls: ['./view-ingredients-list.component.css']
})
export class ViewIngredientsListComponent implements OnInit {

  public ingredients : Ingredient[];

  constructor(private ingredientService : IngredientService, private snackBar: MatSnackBar) { 
    
  }

  ngOnInit(): void {
    this.retrieveIngredients();
  }

  retrieveIngredients() {
    this.ingredientService.getAllIngredients().subscribe(res => {
      this.ingredients = res;
    });
  }

  getDescriptionForIngredient = (ingredient: Ingredient): string => {
    const defaultMsg = `The ingredient ${ingredient.name} will make your pizza better`;
    return defaultMsg;
  }

  ingredientDeletedClicked(ingredientClicked: Ingredient) {
    this.ingredientService.deleteIngredient(ingredientClicked.id).subscribe(res => {
      this.retrieveIngredients();
      this.snackBar.open("Ingredient was Deleted", "Accept", {
        duration: 3000,
      });
    })
  }

}
