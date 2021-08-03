import { Component } from "@angular/core";
// Component definition
@Component({
  // the name of the component when called in another file (ex: <h1></h1>)
  selector: 'app-server',
  //--------------------------------------------------------------------------------------------------------------------
  // external template (html sheet) linked to this component
  templateUrl: './server.component.html'
  //--------------------------------------------------------------------------------------------------------------------
  // external style sheet (CSS) file linked to this component
  // nothing for now
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
