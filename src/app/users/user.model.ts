// Definition of user object
export class User {
  constructor( private name: string, private email: string, private password: string, private members: string[]) {}

  // getters of the data for a specific (this keyword) member
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  // return an array of that contains the kid linked to *this* account
  getMembers() {
    return this.members;
  }
}
