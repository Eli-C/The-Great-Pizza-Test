import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent implements OnInit {

  public ingredient : Ingredient;

  constructor(private ingredientService : IngredientService) { 
  }

  ngOnInit(): void {
    this.ingredient = new Ingredient();
  }

  saveIngredient(event : any) {
    this.ingredient.name = event.name;
    
    this.ingredientService.createIngredient(this.ingredient).subscribe(res => {
      console.log("New ingredient added. ", res)
    });
  }

}
