import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { FormControl } from '@angular/forms';
import { PizzaService } from 'src/app/services/pizza.service';
import { IngredientService } from 'src/app/services/ingredient.service';


@Component({
  selector: 'app-entity-creator',
  templateUrl: './entity-creator.component.html',
  styleUrls: ['./entity-creator.component.css']
})
export class EntityCreatorComponent implements OnInit {

  @Output() onSave = new EventEmitter();
  @Input() entityName : string;
  @Input() isPizza : boolean = false;

  public ingredients: Ingredient[];
  
  nameControl = new FormControl('');
  ingredientsControl = new FormControl([]);

  constructor(private pizzaService : PizzaService, private ingredientService : IngredientService) { 
  }

  ngOnInit(): void {
    this.ingredientService.getAllIngredients().subscribe(res => {
      this.ingredients = res;
    });
  }

  saveEntity() {
    this.onSave.emit({name : this.nameControl.value, ingredients : this.ingredientsControl.value})
  }

}
