import { Component, OnInit } from '@angular/core';
import { ProgramsService } from "./programs.service";

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
  providers: [ProgramsService],
})
export class ProgramsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
