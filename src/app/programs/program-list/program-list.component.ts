import { Component, OnInit } from '@angular/core';
import { Program } from "../program-model";

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  programs = [
    new Program('Le Classique', 'Description classique', 'image classique'),
    new Program('Art et Science', 'description art et science', 'image art et science'),
    new Program('Sportif', 'description sportif', 'lien image sportif'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
