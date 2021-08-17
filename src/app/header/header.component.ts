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
    this._loggingService.onLogoutUserService();
    this._loggingService.onLogoutAdminService();
    alert("Vous êtes maintenant déconnecté!");
  }
}
