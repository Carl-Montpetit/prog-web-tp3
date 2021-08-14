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
      150, 'https://www.porthope.ca/en/things-to-do/resources/Day%20Camps/TopBanner_908x420_Daycamp2_WO_0803.jpg'),
    new Program('Art & Science','Description Art & Science', ['observation astronomique'],
      'samedi', 200, 'https://cdn.shopify.com/s/files/1/2459/8861/files/Astronomy_for_kids_2048_2048x2048.jpg?v=1587757215'),
    new Program('Sportif','Description Sportif', ['course'], 'mardi',
      250, 'https://cdn.cdnparenting.com/articles/2018/03/72136312-H.webp'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
