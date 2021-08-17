import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/programs/programs.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: [ ProgramsService ],
})
export class ShoppingEditComponent implements OnInit {

  shoppingCart;

  constructor( public programService: ProgramsService) { }

  ngOnInit(): void {
  }

}
