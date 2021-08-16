import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class LoginService {
  // account status by default ⟹ false = logout
  statusAdmin: boolean = false;
  statusUser: boolean = false;

  constructor() {
  }

  logStatusAdminChange() {
    this.statusAdmin = !this.statusAdmin;
    console.log( 'Le status du compte a changé, nouveau status: ' + this.statusAdmin )
  }

  logStatusUserChange() {
    this.statusUser = !this.statusUser;
    console.log( 'Le status du compte a changé, nouveau status: ' + this.statusUser )
  }
}
