import { Injectable } from '@angular/core';
import { Children } from './member-model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  static members = [
    new Children('Logan', 'Howlett', '2008'),    //TODO delete 'new' & allow user to add to empty array like in Shopping Cart
  ];

  constructor() { }

  getChildren() {
    return MembersService.members;
  }
}
