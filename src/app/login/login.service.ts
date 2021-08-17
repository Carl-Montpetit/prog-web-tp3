import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // account status by default ⟹ false ⟺ logged out❌ ⟹ true ⟺ logged in✅
  // private : to make the fields reachable from the inside of the class only
  static statusUser: boolean = false;
  static statusAdmin: boolean = false;

  // empty constructor
  constructor() {
  }

  /**
   * switch the status of the user (logged in ⇋ logged out)
   */
  onLoginUserService() {
    LoginService.statusUser = true;
    console.log( 'Le status du compte utilsiateur a changé, nouveau status: ' + LoginService.statusUser );
  }

  /**
   * switch the status of the Admin (logged in ⇋ logged out)
   */
  onLoginAdminService() {
    LoginService.statusAdmin = true;
    console.log( 'Le status du compte admin a changé, nouveau status: ' + LoginService.statusAdmin );
  }

  /**
   * getters for the fields
   */
  getLoggingStatusUser() {
    return LoginService.statusUser;
  }
  getLoggingStatusAdmin() {
    return LoginService.statusAdmin;
  }
}
