import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramListComponent } from './programs/program-list/program-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './accounts/create-account/create-account.component';
import { JuneComponent } from './calendar/june/june.component';
import { JulyComponent } from './calendar/july/july.component';
import { AugustComponent } from './calendar/august/august.component';
import { ShoppingPayComponent } from './shopping-list/shopping-pay/shopping-pay.component';
import { MembersComponent } from './accounts/members/members.component';
import { MemberAddComponent } from './accounts/members/member-add/member-add.component';
import { MemberDeleteComponent } from './accounts/members/member-delete/member-delete.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryComponent } from './accounts/history/history.component';
import { SessionsComponent } from './sessions/sessions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateSessionComponent } from './sessions/create-session/create-session.component';
import { LoginService } from "./login/login.service";
import { PopupComponent } from './popup/popup.component';
import { BlankPopupComponent } from './blank-popup/blank-popup.component';

const appRoutes: Routes = [
  { path: 'connection', component: LoginComponent },
  { path: 'inscriptions', component: SubscriptionsComponent },
  { path: 'historique', component: HistoryComponent },
  { path: 'membres', component: MembersComponent },
  { path: 'creation', component: CreateAccountComponent },
  { path: 'calendrier', component: CalendarComponent },
  { path: 'programmes', component: ProgramsComponent },
  { path: 'panier', component: ShoppingListComponent },
  { path: '', component: MainComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgramsComponent,
    ProgramListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CalendarComponent,
    MainComponent,
    ErrorComponent,
    LoginComponent,
    CreateAccountComponent,
    JuneComponent,
    JulyComponent,
    AugustComponent,
    ShoppingPayComponent,
    MembersComponent,
    MemberAddComponent,
    MemberDeleteComponent,
    SubscriptionsComponent,
    HistoryComponent,
    SessionsComponent,
    AccountsComponent,
    CreateSessionComponent,
    PopupComponent,
    BlankPopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forRoot( appRoutes )
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [ LoginService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
