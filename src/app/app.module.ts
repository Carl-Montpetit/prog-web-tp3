import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramDetailComponent } from './programs/program-detail/program-detail.component';
import { ProgramListComponent } from './programs/program-list/program-list.component';
import { ProgramItemComponent } from './programs/program-list/program-item/program-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const appRoutes: Routes = [
  { path: 'calendrier', component: CalendarComponent },
  { path: 'programmes', component: ProgramsComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', component: MainComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgramsComponent,
    ProgramDetailComponent,
    ProgramListComponent,
    ProgramItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CalendarComponent,
    MainComponent,
    ErrorComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
