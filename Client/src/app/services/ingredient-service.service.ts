import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/classes/appConstants';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientServiceService {

  private baseUrl : string;

  constructor(private httpClient : HttpClient) { 
    this.baseUrl = AppConstants.baseUrl;
  }

  createIngredient(entity : Ingredient){
    return this.httpClient.post(this.baseUrl + '/ingredients/', entity);
  }

  getAllIngredients(){
    return this.httpClient.get(this.baseUrl + '/ingredients/');
  }

  getIngredientById(id: number){
    return this.httpClient.get(this.baseUrl + '/ingredients/' + id);
  }

  updateIngredient(id: number, entity : Ingredient){
    return this.httpClient.put(this.baseUrl + '/ingredients/' + id, entity);
  }

  deleteIngredient(id: number) {  
    return this.httpClient.delete(this.baseUrl + '/ingredients/' + id);
  }
}
