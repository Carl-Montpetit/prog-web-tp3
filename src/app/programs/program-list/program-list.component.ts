import { Component, OnInit } from '@angular/core';
import { Program } from "../program-model";
import { ProgramsService } from "../programs.service";

@Component( {
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: [ './program-list.component.css' ]
} )
export class ProgramListComponent implements OnInit {
  programs: Program[];

  constructor( public programService: ProgramsService ) {
  }

  ngOnInit() {
    this.programs = this.programService.getPrograms();
  }

}
