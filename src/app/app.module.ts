import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { MembersComponent } from './members/members.component';
import { MemberAddComponent } from './members/member-add/member-add.component';
import { MemberDeleteComponent } from './members/member-delete/member-delete.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryComponent } from './history/history.component';
import { AdminComponent } from './admin/admin.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CreateActivitiesBlocComponent } from './activities/create-activities-bloc/create-activities-bloc.component';
import { CreateActivityComponent } from './activities/create-activity/create-activity.component';
import { SessionsComponent } from './sessions/sessions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { CreateProgramComponent } from './programs/create-program/create-program.component';
import { CreateSessionComponent } from './sessions/create-session/create-session.component';
import { TypesComponent } from './activities/types/types.component';
import { CreateTypeComponent } from './activities/types/create-type/create-type.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: 'connection', component: LoginComponent },
  { path: 'administrateur', component: AdminComponent},
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
    AdminComponent,
    ActivitiesComponent,
    CreateActivitiesBlocComponent,
    CreateActivityComponent,
    SessionsComponent,
    AccountsComponent,
    UsersComponent,
    CreateProgramComponent,
    CreateSessionComponent,
    TypesComponent,
    CreateTypeComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( appRoutes )
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
