import { Component, OnInit } from '@angular/core';
// Component definition
@Component({
  // both are the same thing
  // selector: '[app-servers]',
  // selector: '.app=servers',
  //--------------------------------------------------------------------------------------------------------------------
  // the name of the component when called in another file (ex: <h1></h1>)
  selector: 'app-servers',
  //--------------------------------------------------------------------------------------------------------------------
  // internal template (html sheet) without passing to another file
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  //--------------------------------------------------------------------------------------------------------------------
  // external template (html sheet) linked to this component
  templateUrl: 'servers.component.html',
  //--------------------------------------------------------------------------------------------------------------------
  // style sheet (CSS) file linked to this component
  styleUrls: ['./servers.component.css']
  //--------------------------------------------------------------------------------------------------------------------
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      }, 2000);
    }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

}
