import { Injectable } from '@angular/core';
import { Children } from './member-model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  static members = [    //TODO delete 'new' & allow user to add to empty array like in Shopping Cart
    new Children('Raven', 'Darkholme', '2003'),
    new Children('Erik', 'Lehnsherr', '2009'),
    new Children('Kurt', 'Wagner', '2016')
  ];

  constructor() { }

  getChildren() {
    return MembersService.members;
  }
}
