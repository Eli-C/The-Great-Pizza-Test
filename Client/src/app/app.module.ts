import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPizzasListComponent } from './components/view-pizzas-list/view-pizzas-list.component';
import { ViewIngredientsListComponent } from './components/view-ingredients-list/view-ingredients-list.component';
import { CreateIngredientComponent } from './components/create-ingredient/create-ingredient.component';
import { CreatePizzaComponent } from './components/create-pizza/create-pizza.component';
import { ViewElementsComponent } from './components/view-elements/view-elements.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddIngredientsToPizzaComponent } from './components/add-ingredients-to-pizza/add-ingredients-to-pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityCreatorComponent } from './components/entity-creator/entity-creator.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ViewPizzasListComponent,
    ViewIngredientsListComponent,
    CreateIngredientComponent,
    CreatePizzaComponent,
    ViewElementsComponent,
    AddIngredientsToPizzaComponent,
    EntityCreatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
