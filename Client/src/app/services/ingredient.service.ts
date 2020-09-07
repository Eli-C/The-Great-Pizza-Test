import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../classes/appConstants';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private baseUrl : string;

  constructor(private httpClient : HttpClient) { 
    this.baseUrl = AppConstants.baseUrl;
  }

  createIngredient(entity : Ingredient) : Observable<Ingredient> {
    return this.httpClient.post<Ingredient>(this.baseUrl + '/ingredients/', entity);
  }

  getAllIngredients() : Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(this.baseUrl + '/ingredients/');
  }

  getIngredientById(id: number) : Observable<Ingredient> {
    return this.httpClient.get<Ingredient>(this.baseUrl + '/ingredients/' + id);
  }

  updateIngredient(id: number, entity : Ingredient) : Observable<Ingredient> {
    return this.httpClient.put<Ingredient>(this.baseUrl + '/ingredients/' + id, entity);
  }

  deleteIngredient(id: number) : Observable<any> {  
    return this.httpClient.delete(this.baseUrl + '/ingredients/' + id);
  }
}
