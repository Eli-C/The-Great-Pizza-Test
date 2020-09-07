import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-view-ingredients-list',
  templateUrl: './view-ingredients-list.component.html',
  styleUrls: ['./view-ingredients-list.component.css']
})
export class ViewIngredientsListComponent implements OnInit {

  public ingredients : Ingredient[];

  constructor(private ingredientService : IngredientService) { 
    
  }

  ngOnInit(): void {
    this.ingredientService.getAllIngredients().subscribe(res => {
      this.ingredients = res;
    });
  }

}
