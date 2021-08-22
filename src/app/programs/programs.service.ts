import { NgForm } from '@angular/forms';
import { BlankPopupComponent } from './../blank-popup/blank-popup.component';
import { PopupComponent } from './../popup/popup.component';
import { Injectable } from '@angular/core';
import { Activity, Monitor, Program, BlocActivities, Type } from "./program-model";
import { ShoppingItem } from './program-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { MembersService } from '../accounts/members/members.service';


@Injectable( {
  providedIn: 'root'
} )
export class ProgramsService {
  doneSubmit = true;
  static shoppingList = [];
  static totalPrice = 0;
  static userStatus: boolean;
  static adminStatus: boolean;
  static blocActivities: [];
  static programs = [
    new Program( 'Le Classique : 🏸🔭🎨', 'Le classique comprend chaque jour un bloc d’activités de type sportif et un' +
      ' autre avec une activité de type art et une activité de type science.', [ Monitor.CM, Monitor.JM ],
        [ new Activity('soccer⚽️', Type.SP), new Activity(' course🏃🏼‍', Type.SP), new Activity(' football🏈', Type.SP)], 100 ),
    new Program( 'Art & Science : 👩‍🔬🧑‍🎨🤔', 'Le programme arts et science comprend plusieurs activités d\'arts' +
      ' culinaires, d\'arts visuels, d\'arts plastiques, de chimie, de biologie et de physique. Il ne possède pas' +
      'd’activité physique, cependant une activité matinale est réservée pour pratiquer le yoga ou jouer à un jeu de course comme le ballon chasseur.',
      [Monitor.MJ, Monitor.MP], [ new Activity('observation astronomique🔭', Type.SC), new Activity(' randonné🌳', Type.EX)], 150),
    new Program( "L'enfant actif : 🚴‍⛹️‍🏊‍", 'Le programme athlétique est un camp de jour sportif intensif pour les enfants très actifs. ' + 
      'Il comprend au moins quatre activités quotidiennes dont le basketball, le tennis, le soccer, le ballon chasseur, le baseball, etc.',
      [Monitor.PD, Monitor.PL], [ new Activity('baseball⚾️', Type.SP), new Activity(' natation🏊‍', Type.AA)], 135,),
  ];

  constructor( private dialog: MatDialog, public loginService: LoginService,
               public memberService: MembersService, private router: Router ) {
  }

  getPrograms() {
    return ProgramsService.programs;
  }

  getShoppingCart() {
    return ProgramsService.shoppingList;
  }

  addToCart( programName, child, programPrice ) {
    ProgramsService.shoppingList.push( new ShoppingItem( programName, child, programPrice ) );
    ProgramsService.totalPrice = ProgramsService.totalPrice + programPrice;
  }

  getTotalPrice() {
    return ProgramsService.totalPrice;
  }

  removeFromCart( program, price ) {
    let index = ProgramsService.shoppingList.indexOf( program )
    ProgramsService.shoppingList.splice( index, 1 )
    ProgramsService.totalPrice = ProgramsService.totalPrice - price;
  }

  selectChildPopup( programName, programPrice ) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open( PopupComponent, dialogConfig )

      .afterClosed()
      .subscribe( childSelected => {
        if ( childSelected ) {
          this.addToCart( programName, childSelected, programPrice );
        }
      } );
  }

  getUserStatus(): boolean {
    ProgramsService.userStatus = this.loginService.getLoggingStatusUser()
    return ProgramsService.userStatus;
  }

  getAdminStatus(): boolean {
    ProgramsService.adminStatus = this.loginService.getLoggingStatusAdmin()
    return ProgramsService.adminStatus;
  }

  checkLogin( programName, programPrice ) {
    if ( this.getUserStatus() ) {
      if ( this.memberService.getChildren().length == 0 ) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = { text: "vous n'avez aucun enfant enregistré" }
        this.dialog.open( BlankPopupComponent, dialogConfig )
          .afterClosed()
          .subscribe( close => {
            this.router.navigate( [ 'membres' ] )
          } );
      } else {
        this.selectChildPopup( programName, programPrice )
      }
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { text: 'Il faut etre connecté' }
      this.dialog.open( BlankPopupComponent, dialogConfig )
        .afterClosed()
        .subscribe( close => {
          this.router.navigate( [ 'connection' ] )
        } );
    }
  }

  getMonitors() {
    return Object.values(Monitor);
  }

  getTypes() {
    return Object.values(Type);
  }

  createNewProgram(form: NgForm) {
    ProgramsService.programs.push(
              new Program(form.value.name, form.value.description, form.value.monitor,
                [new Activity(form.value.activity, form.value.type), new Activity('as', Type.A)], form.value.price))
    this.doneSubmit = true;
  }
}
