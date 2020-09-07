import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CreatePizzaComponent } from '../components/create-pizza/create-pizza.component';
import { CreateIngredientComponent } from '../components/create-ingredient/create-ingredient.component';
import { ViewPizzasListComponent } from '../components/view-pizzas-list/view-pizzas-list.component';
import { ViewIngredientsListComponent } from '../components/view-ingredients-list/view-ingredients-list.component';
import { EditPizzaComponent } from '../components/edit-pizza/edit-pizza.component';


const routes: Routes = [
    
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'addPizza',
      component: CreatePizzaComponent
    },
    {
      path: 'addIngredient',
      component: CreateIngredientComponent
    },
    {
      path: 'editPizzas/:id',
      component: EditPizzaComponent
    },
    {
      path: 'editIngredient',
      component: HomeComponent
    },
    {
      path: 'viewPizzas',
      component: ViewPizzasListComponent
    },
    {
      path : 'viewIngredients',
      component: ViewIngredientsListComponent
    },
    {
        path : 'addIngredientsToPizza',
        component: HomeComponent
    },
    {
        path : 'deletePizza',
        component: HomeComponent
    },
    {
        path : 'deleteIngredient',
        component: HomeComponent
    },
    {
      path: '**',
      redirectTo: 'home',
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  