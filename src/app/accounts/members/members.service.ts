import { Injectable } from '@angular/core';
import { Children } from './member-model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  public tempSelection;
  static members = [];

  constructor() { }

  getChildren() {
    return MembersService.members;
  }

  addNewMember(firstName, lastName, birthday) {
    MembersService.members.push(new Children(firstName, lastName, birthday));
  }

  removeMember( child ) {
    let index = MembersService.members.indexOf( child )
    MembersService.members.splice( index, 1 )
    console.log(child)
  }

  onChange(selectedChild) {
    this.tempSelection = selectedChild;
    console.log(selectedChild)
}

}
