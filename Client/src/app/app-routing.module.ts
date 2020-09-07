import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewIngredientsListComponent } from './components/view-ingredients-list/view-ingredients-list.component';
import { ViewPizzasListComponent } from './components/view-pizzas-list/view-pizzas-list.component';
import { CreateIngredientComponent } from './components/create-ingredient/create-ingredient.component';
import { CreatePizzaComponent } from './components/create-pizza/create-pizza.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
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
      path: 'editPizzas',
      component: AboutComponent
    },
    {
      path: 'editIngredient',
      component: TaskListComponent
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
        component: TaskComponent
    },
    {
        path : 'deletePizza',
        component: TaskComponent
    },
    {
        path : 'deleteIngredient',
        component: TaskComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  