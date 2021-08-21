import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  @ViewChild('f') createAccountForm: NgForm;

  // password format regex for validation & security
  // Minimum 8 letters with a least a symbol, upper and lower case letters and a number
  regExPw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Name regex : accept only letters (capital or not)
  regExName = /^[a-zA-Z]+$/;

  // definition of an account
  private account = {
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    pw1: '',
}

  constructor() {

  }

  ngOnInit(): void {
  }

  /**
   * set the inputs values in variables and send them in a Json file for storage
   * TODO : implement Json
   * @param form
   */
  onSubmit(form: NgForm): void {
    this.account.firstName = this.createAccountForm.value.firstName;
    this.account.lastName = this.createAccountForm.value.lastName;
    this.account.birthday = this.createAccountForm.value.date;
    this.account.email = this.createAccountForm.value.email;
    this.account.pw1 = this.createAccountForm.value.pw1;
    // print the data in the console
    console.log(form);
    console.log(this.account.firstName);
    console.log(this.account.lastName);
    console.log(this.account.birthday);
    console.log(this.account.email);
    console.log(this.account.pw1);
  }
}
