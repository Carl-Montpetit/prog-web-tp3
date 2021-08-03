import { Component } from '@angular/core';
// Component definition
@Component({
  // the name of the component when called in another file (ex: <h1></h1>)
  selector: 'app-root',
  //--------------------------------------------------------------------------------------------------------------------
  // external template (html sheet) linked to this component
  templateUrl: './app.component.html',
  //--------------------------------------------------------------------------------------------------------------------
  // external style sheet (CSS) file linked to this component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular';
}
