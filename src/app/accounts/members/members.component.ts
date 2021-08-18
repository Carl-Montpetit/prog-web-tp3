import { Component, OnInit } from '@angular/core';
import { Children } from "./member-model";

@Component( {
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: [ './members.component.css' ]
} )
export class MembersComponent implements OnInit {
  // Members est un ensemble (array) d'objects member
  members = [
    new Children( 'Patrick', 'Lafontaine', '08-06-2015' ),
    new Children('Patricia', 'Carrière', '22-03-2010'),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
