import { Injectable } from '@angular/core';
import { Children } from './member-model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  static members = [];

  constructor() { }

  getChildren() {
    return MembersService.members;
  }

  addNewMember(firstName, lastName, birthday) {
    MembersService.members.push(new Children(firstName, lastName, birthday));
  }
}
