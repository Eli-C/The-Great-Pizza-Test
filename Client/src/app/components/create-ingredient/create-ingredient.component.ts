import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent implements OnInit {

  public ingredient : Ingredient;

  constructor(private ingredientService : IngredientService, private snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
    this.ingredient = new Ingredient();
  }

  saveIngredient(event : any) {
    this.ingredient.name = event.name;
    
    this.ingredientService.createIngredient(this.ingredient).subscribe(res => {
      this.snackBar.open("New ingredient added", "Accept", {
        duration: 3000,
      });
    });
  }

}
