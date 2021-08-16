import { Component, OnInit } from '@angular/core';
import { MemberModel } from "./member-model";

@Component( {
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: [ './members.component.css' ]
} )
export class MembersComponent implements OnInit {
  // Members est un ensemble (array) d'objects member
  members = [
    new MemberModel( 'Patrick', 'Lafontaine', '08-06-2015' ),
    new MemberModel('Patricia', 'Carrière', '22-03-2010'),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
