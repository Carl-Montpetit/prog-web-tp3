import { Component, Injectable, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { LoginService } from "../login/login.service";

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
} )

export class HeaderComponent implements OnInit, OnChanges {
  static userStatus: boolean;
  static adminStatus: boolean;

  constructor( private _loggingService: LoginService ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges( changes: SimpleChanges ) {
  }

  getUserStatus(): boolean {
    HeaderComponent.userStatus = this._loggingService.getLoggingStatusUser();
    return HeaderComponent.userStatus;
  }

  getAdminStatus(): boolean {
    HeaderComponent.adminStatus = this._loggingService.getLoggingStatusAdmin();
    return HeaderComponent.adminStatus;
  }

  setStatusOff(): void {
    if (this._loggingService.getLoggingStatusUser() && !this._loggingService.getLoggingStatusAdmin()) {
      this._loggingService.onLogoutUserService();
    }
    else if (!this._loggingService.getLoggingStatusUser() && this._loggingService.getLoggingStatusAdmin()) {
      this._loggingService.onLogoutAdminService();
    }
    else if (this._loggingService.getLoggingStatusUser() && this._loggingService.getLoggingStatusAdmin()) {
      this._loggingService.onLogoutUserService();
      this._loggingService.onLogoutAdminService();
    }

  }
}
