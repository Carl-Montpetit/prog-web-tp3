import { Component, OnInit } from '@angular/core';
import { Program } from "../program-model";

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  programs = [
    new Program('Le Classique','Description classique', ['randonné'], 'vendredi',
      150, 'lienC'),
    new Program('Art & Science','Description Art & Science', ['observation astronomique'],
      'samedi', 200, 'lienAS'),
    new Program('Sportif','Description Sportif', ['course'], 'mardi',
      250, 'lienS'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
