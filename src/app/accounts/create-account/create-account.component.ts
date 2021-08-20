import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  @ViewChild('f') createAccountForm: NgForm;

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
    this.account.birthday = this.createAccountForm.value.birthday;
    this.account.email = this.createAccountForm.value.email;
    this.account.pw1 = this.createAccountForm.value.pw1;
    this.account.pw2 = this.createAccountForm.value.pw2;
    console.log(form);
  }
}
