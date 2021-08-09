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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
