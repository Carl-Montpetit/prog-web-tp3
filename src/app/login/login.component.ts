import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from "./login.service";
import { NgForm } from "@angular/forms";

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ],
} )
export class LoginComponent implements OnInit {
  @ViewChild( 'fu' ) loginUserForm: NgForm;
  @ViewChild( 'fa' ) loginAdminForm: NgForm;

  // password format regex for validation & security
  // Minimum 8 letters with a least a symbol, upper and lower case letters and a number
  regExPw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // the field is initialized empty
  user = {
    email: '',
    pw: ''
  }
  // the field is initialized empty
  admin = {
    email: '',
    pw: ''
  }

  // to know if the form was submitted or not
  submittedUser = false;
  submittedAdmin = false;

  constructor( private loggingService: LoginService ) {
  }

  ngOnInit(): void {
  }

  /**
   * Switch the status to true if a user is logged in
   */
  onLoginUser(): void {
    this.loggingService.onLoginUserService();
  }

  /**
   * Switch the status to true if the admin is logged in
   */
  onLoginAdmin(): void {
    this.loggingService.onLoginAdminService();
  }

  /**
   * update the fields of the user after submitted the form
   * TODO : implement to sent to Json file
   * @param form
   */
  onSubmitUser( form: NgForm ): void {
    this.submittedUser = true;
    console.log( form );
    this.user.email = this.loginUserForm.value.email;
    this.user.pw = this.loginUserForm.value.pw;
  }

  /**
   * update the fields of the admin after submitted the form
   * TODO : implement to sent to Json file
   * @param form
   */
  onSubmitAdmin( form: NgForm ): void {
    this.submittedAdmin = true;
    console.log( form );
    this.admin.email = this.loginAdminForm.value.email;
    this.admin.email = this.loginAdminForm.value.pw;
  }
}
