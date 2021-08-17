import { Component, Injectable, OnInit } from '@angular/core';
import { LoginService } from "../login/login.service";

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
} )

export class HeaderComponent implements OnInit {
  static userStatus: boolean;
  static adminStatus: boolean;

  constructor( private _loggingService: LoginService ) {
  }

  ngOnInit() {
  }

  getUserStatus(): boolean {
    HeaderComponent.userStatus = this._loggingService.getLoggingStatusUser();
    return HeaderComponent.userStatus;
  }

  getAdminStatus(): boolean {
    HeaderComponent.adminStatus = this._loggingService.getLoggingStatusAdmin();
    return HeaderComponent.adminStatus;
  }

  setUserStatusOff(): void {
    HeaderComponent.userStatus = false;
  }

  setAdminStatusOff(): void {
    HeaderComponent.adminStatus = false;
  }
}
