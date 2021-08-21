import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-pay',
  templateUrl: './shopping-pay.component.html',
  styleUrls: ['./shopping-pay.component.css'],
})
export class ShoppingPayComponent implements OnInit {
  @ViewChild('f') payBillForm: NgForm;
  public selectedCountry = '';
  // Name regex : accept only letters (capital or not)
  regExName = /^[a-zA-Z]+$/;

  // ressource : https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
  // For both first name and last name seperate by a white space
  regExFullName = /^[a-z ,.'-]+$/i;

  // Ressource : https://regexlib.com/Search.aspx?k=canadian+postal+code&AspxAutoDetectCookieSupport=1
  // This expression matches three different formats of postal codes: 5 digit US ZIP code,
  // 5 digit US ZIP code + 4, and 6 digit alphanumeric Canadian Postal Code.
  // The first one must be 5 numeric digits. The ZIP+4 must be 5 numeric digits, a hyphen, and then 4 numeric digits.
  // The Canadian postal code must be of the form ANA NAN where A is any uppercase alphabetic character and N is a
  // numeric digit from 0 to 9.
  regExPostalCode = /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/;

  // Ressource : https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
  regExMasterCard = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
  regExVisaMasterCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
  regExVisaCard = /^4[0-9]{12}(?:[0-9]{3})?$/;

  // number between 0-9 and the string contains 3 or 4 digits
  regExCvv = /^[0-9]{3,4}$/;

  // definition of a bill
  private bill = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    state: '',
    zip: '',
    ccName: '',
    ccNumber: '',
    ccExp: '',
    cvv: '',
  }

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  /**
   * set the inputs values in variables and send them in a Json file for storage
   * TODO : implement Json
   * @param form
   */
  onSubmitPay(form: NgForm) {
    this.bill.firstName = this.payBillForm.value.firstName;
    this.bill.lastName = this.payBillForm.value.lastName;
    this.bill.email = this.payBillForm.value.email;
    this.bill.address = this.payBillForm.value.address;
    this.bill.country = this.payBillForm.value.country;
    this.bill.state = this.payBillForm.value.state;
    this.bill.zip = this.payBillForm.value.zip;
    this.bill.ccName = this.payBillForm.value.ccName;
    this.bill.ccNumber = this.payBillForm.value.ccNumber;
    this.bill.ccExp = this.payBillForm.value.ccExp;
    this.bill.cvv = this.payBillForm.value.cvv;
    // print the data in the console
    console.log(form);
    console.log(this.bill.firstName);
    console.log(this.bill.lastName);
    console.log(this.bill.email);
    console.log(this.bill.address);
    console.log(this.bill.country);
    console.log(this.bill.state);
    console.log(this.bill.zip);
    console.log(this.bill.ccName);
    console.log(this.bill.ccNumber);
    console.log(this.bill.ccExp);
    console.log(this.bill.cvv);
  }
}
