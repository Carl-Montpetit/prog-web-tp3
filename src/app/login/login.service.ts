import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class LoginService {
  // account status by default ⟹ false ⟺ logged out❌ ⟹ true ⟺ logged in✅
  // private : to make the fields reachable from the inside of the class only
  private statusAdmin: boolean = false;
  private statusUser: boolean = false;

  // empty constructor
  constructor() {
  }

  /**
   * switch the status of the user (logged in ⇋ logged out)
   */
  logStatusUserChange() {
    this.statusUser = !this.statusUser;
    console.log( 'Le status du compte a changé, nouveau status: ' + this.statusUser )
  }

  /**
   * switch the status of the Admin (logged in ⇋ logged out)
   */
  logStatusAdminChange() {
    this.statusAdmin = !this.statusAdmin;
    console.log( 'Le status du compte a changé, nouveau status: ' + this.statusAdmin )
  }

  /**
   * getters for the fields
   */
  getLoggingStatusUser() {
    return this.statusUser
  }
  getLoggingStatusAdmin() {
    return this.statusAdmin
  }
}
