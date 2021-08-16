import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service";
import { NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {

  constructor(private loggingService: LoginService) {
  }

  ngOnInit(): void {
  }

  onLoginAdmin() {
    this.loggingService.logStatusAdminChange();
  }

  onLoginUser() {
    this.loggingService.logStatusUserChange();
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
