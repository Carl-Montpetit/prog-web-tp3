import { PopupComponent } from './../popup/popup.component';
import { Injectable } from '@angular/core';
import { Program } from "./program-model";
import { ShoppingItem } from './program-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  public programs = [
    new Program( 'Le Classique : 🏸🔭🎨', 'Le classique comprend chaque jour un bloc d’activités de type sportif et un' +
      ' autre' +
      ' avec une activité de type art et une activité de type science.', [ 'Claude', 'Massoud' ],
      [ 'Émilie', 'Étienne' ], [ 'Sport🏈' ], [ 'soccer⚽️', ' course🏃🏼‍', ' football🏈' ], 100, 'https://www.porthope.ca/en/things-to-do/resources/Day%20Camps/TopBanner_908x420_Daycamp2_WO_0803.jpg' ),
    new Program( 'Art & Science : 👩‍🔬🧑‍🎨🤔', 'Le programme arts et science comprend plusieurs activités d\'arts' +
      ' culinaires, d\'arts visuels, d\'arts plastiques, de chimie, de biologie et de physique. Il ne possède pas d’activité physique, cependant une activité matinale est réservée pour pratiquer le yoga ou jouer à un jeu de course comme le ballon chasseur.',
      [ 'Carl', ' Paul' ], [ 'Ubert', ' Pascal' ], [ 'Physique🪐' ], [ 'observation astronomique🔭', ' randonné🌳' ],
      150, 'https://cdn.shopify.com/s/files/1/2459/8861/files/Astronomy_for_kids_2048_2048x2048.jpg?v=1587757215' ),
    new Program( "L'enfant actif : 🚴‍⛹️‍🏊‍", 'Le programme athlétique est un camp de jour sportif intensif pour les' +
      ' enfants très' +
      ' actifs.' +
      ' Il' +
      ' comprend au moins quatre activités quotidiennes dont le basketball, le tennis, le soccer, le ballon' +
      ' chasseur, le baseball, etc.', ['Steve', ' Matthiew'], ['Justin', ' Mario'], [ 'Sport🏈' ], ['baseball⚾️', ' natation🏊‍'],
      135, 'https://cdn.cdnparenting.com/articles/2018/03/72136312-H.webp' ),
  ];

  static shoppingList = [];
  static totalPrice = 0;

  constructor(private dialog: MatDialog) {}

  getPrograms() {
    return this.programs;
  }

  getShoppingCart() {
    return ProgramsService.shoppingList;
  }

  addToCart(programName, programPrice) {
    ProgramsService.shoppingList.push(new ShoppingItem(programName, 'kid\'s name', programPrice));
    ProgramsService.totalPrice = ProgramsService.totalPrice + programPrice;
  }

  getTotalPrice() {
    return ProgramsService.totalPrice;
  }

  removeFromCart(program, price) {
    let index = ProgramsService.shoppingList.indexOf(program)
    ProgramsService.shoppingList.splice(index, 1)
    ProgramsService.totalPrice = ProgramsService.totalPrice - price;
  }

  selectChildPopup() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(PopupComponent, dialogConfig)
    
    .afterClosed()
      console.log("eeek");
    
  }
}
