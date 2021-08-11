import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Component definition
@Component({
  // the name of the component when called in another file (ex: <h1></h1>)
  selector: 'app-root',
  // external template (html sheet) linked to this component
  templateUrl: './app.component.html',
  // external style sheet (CSS) file linked to this component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Camp de jour';
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
