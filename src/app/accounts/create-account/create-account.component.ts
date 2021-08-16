import { Component, OnInit, EventEmitter, Output, ClassProvider } from '@angular/core';
import { LoginService } from "../../login/login.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: [LoginService],
})
export class CreateAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoginService) {
  }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountAdded.emit({
    name: accountName,
    status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
