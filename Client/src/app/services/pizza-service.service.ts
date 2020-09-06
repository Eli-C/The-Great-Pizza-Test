import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/classes/appConstants';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {

  private baseUrl : string;

  constructor(private httpClient : HttpClient) { 
    this.baseUrl = AppConstants.baseUrl;
  }

  createPizza(entity : Pizza){
    return this.httpClient.put(this.baseUrl + '/pizzas/', entity);
  }

  getAllPizzas(){
    return this.httpClient.get(this.baseUrl + '/pizzas/');
  }

  getPizzaById(id: number){
    return this.httpClient.get(this.baseUrl + '/pizzas/' + id);
  }

  updatePizza(id: number, entity : Pizza){
    return this.httpClient.put(this.baseUrl + '/pizzas/' + id, entity);
  }

  deletePizza(id: number) {  
    return this.httpClient.delete(this.baseUrl + '/pizzas/' + id);
  }
}
