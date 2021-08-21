import { Injectable } from '@angular/core';
import { Pays, Provinces } from './shopping-list.model'; 

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  constructor() { }

  getPays() {
    return Object.values(Pays);
  }

  getProvinces() {
    return Object.values(Provinces);
  }
}
