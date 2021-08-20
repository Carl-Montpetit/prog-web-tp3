import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // account status by default ⟹ false ⟺ logged out❌ ⟹ true ⟺ logged in✅
  // private : to make the fields reachable from the inside of the class only
  static statusUser: boolean = false;
  static statusAdmin: boolean = false;
  static isValidated: boolean = false;

  // empty constructor
  constructor() {
  }

  /**
   * switch the status of the user (logged in ⇋ logged out)
   */
  onLoginUserService() {
    LoginService.statusUser = true;
    alert("Bienvenu, vous êtes maintenant connecté en tant qu'utilisateur!..");
    console.log( 'Le status du compte utilsiateur a changé, nouveau status: ' + LoginService.statusUser );
  }

  /**
   * switch the status of the user (logged in ⇋ logged out)
   */
  onLogoutUserService() {
    LoginService.isValidated = confirm('Êtes-vous certain de vouloir vous déconnecter?..');
    if (!this.getLogoutValidation()) {
      LoginService.statusUser = true;
      alert('La déconnection a été cancelée!..');
    }
    else {
      LoginService.statusUser = false;
      alert("Vous êtes maintenant déconnecté!");
    }
    console.log( 'Le status du compte admin a changé, nouveau status: ' + LoginService.statusUser );
  }

  /**
   * switch the status of the Admin (logged in ⇋ logged out)
   */
  onLoginAdminService() {
    LoginService.statusAdmin = true;
    alert("Bienvenu, vous êtes maintenant connecté en tant qu'administrateur!..");
    console.log( 'Le status du compte admin a changé, nouveau status: ' + LoginService.statusAdmin );
  }

  /**
   * switch the status of the Admin (logged in ⇋ logged out)
   */
  onLogoutAdminService() {
    LoginService.isValidated = confirm('Êtes-vous certain de vouloir vous déconnecter?..');
    if (!this.getLogoutValidation()) {
      LoginService.statusAdmin = true;
      alert('La déconnection a été cancelée!..');
    }
    else {
      LoginService.statusAdmin = false;
      alert("Vous êtes maintenant déconnecté!");
    }
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

  getLogoutValidation() {
    return LoginService.isValidated;
  }
}
