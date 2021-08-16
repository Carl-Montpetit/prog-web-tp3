import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class LoginService {
  status: boolean = false; // account status by default ⟹ false = logout

  constructor() {
  }

  logStatusChange( status: string ) {
    console.log( 'Le status du compte a changé, nouveau status: ' + status )
  }
}
