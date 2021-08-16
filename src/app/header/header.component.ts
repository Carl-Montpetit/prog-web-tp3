import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login/login.service";

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
  providers: [LoginService],
} )
export class HeaderComponent implements OnInit {
  // Declarations of the fields of the class
  adminLoggedIn: boolean
  userLoggedIn: boolean
  loggedIn: boolean

  // how the object is initialized ⟹ empty by default
  constructor() {
  }

  // Angulare special
  ngOnInit(): void {
  }
  // we add functions here ⇩

}
