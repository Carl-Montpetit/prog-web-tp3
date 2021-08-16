import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service";

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

  onLogIn(){};
}
