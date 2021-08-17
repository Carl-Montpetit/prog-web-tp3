import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login/login.service";

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
  providers: [LoginService],
} )
export class HeaderComponent implements OnInit {

  constructor(public loggingService: LoginService) {
  }

  ngOnInit() {
  }

  // Getters for the status of user & admin
  getUserStatus() {
    return this.loggingService.getLoggingStatusUser()
  }

  getAdminStatus() {
    return this.loggingService.logStatusAdminChange()
  }
}
