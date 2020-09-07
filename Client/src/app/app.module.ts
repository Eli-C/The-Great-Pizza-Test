import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPizzasListComponent } from './components/view-pizzas-list/view-pizzas-list.component';
import { ViewIngredientsListComponent } from './components/view-ingredients-list/view-ingredients-list.component';
import { CreateIngredientComponent } from './components/create-ingredient/create-ingredient.component';
import { CreatePizzaComponent } from './components/create-pizza/create-pizza.component';
import { ViewElementsComponent } from './components/view-elements/view-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ViewPizzasListComponent,
    ViewIngredientsListComponent,
    CreateIngredientComponent,
    CreatePizzaComponent,
    ViewElementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
