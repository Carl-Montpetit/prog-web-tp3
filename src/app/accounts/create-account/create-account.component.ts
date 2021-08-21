import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  @ViewChild('f') createAccountForm: NgForm;
  regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  private account = {
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    pw1: '',
    pw2: ''
}

  constructor() {

  }

  ngOnInit(): void {
  }

  onCreateAccount(){
  }

  onSubmit(form: NgForm): void {
    this.account.firstName = this.createAccountForm.value.firstName;
    this.account.lastName = this.createAccountForm.value.lastName;
    this.account.birthday = this.createAccountForm.value.date;
    this.account.email = this.createAccountForm.value.email;
    this.account.pw1 = this.createAccountForm.value.pw1;
    this.account.pw2 = this.createAccountForm.value.pw2;
    console.log(form);
    console.log(this.account.firstName);
    console.log(this.account.lastName);
    console.log(this.account.birthday);
    console.log(this.account.email);
    console.log(this.account.pw1);
    console.log(this.account.pw2);
  }

  validateFirstNameFormat(): boolean {
    if (this.account.firstName.length >= 3 && this.account.firstName.length <= 30) {
      return true;
    }
  }
}
