import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component( {
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: [ './recipes-list.component.css' ]
} )
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test description',
      'https://media.timeout.com/images/105454362/630/472/image.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
