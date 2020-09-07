import { Injectable } from '@angular/core';
import { AppConstants } from '../classes/appConstants';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../models/pizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private baseUrl : string;

  constructor(private httpClient : HttpClient) { 
    this.baseUrl = AppConstants.baseUrl;
  }

  createPizza(entity : Pizza) : Observable<Pizza> {
    return this.httpClient.post<Pizza>(this.baseUrl + '/pizzas/', entity);
  }

  getAllPizzas() : Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(this.baseUrl + '/pizzas/');
  }

  getPizzaById(id: number) : Observable<Pizza> {
    return this.httpClient.get<Pizza>(this.baseUrl + '/pizzas/' + id);
  }

  updatePizza(id: number, entity : Pizza) : Observable<Pizza> {
    return this.httpClient.put<Pizza>(this.baseUrl + '/pizzas/' + id, entity);
  }

  deletePizza(id: number) : Observable<any> {  
    return this.httpClient.delete(this.baseUrl + '/pizzas/' + id);
  }
}
