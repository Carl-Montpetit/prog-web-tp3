import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-pay',
  templateUrl: './shopping-pay.component.html',
  styleUrls: ['./shopping-pay.component.css'],
})
export class ShoppingPayComponent implements OnInit {
  public selectedCountry = '';

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

}
