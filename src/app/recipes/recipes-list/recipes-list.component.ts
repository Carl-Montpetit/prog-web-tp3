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
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Ffood-network-kitchen%2Ftuscan-chicken-skillet-5421728&psig=AOvVaw2EB3Zg-pquHlsuKqQWjMzF&ust=1628502633498000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj485uTofICFQAAAAAdAAAAABAD')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
