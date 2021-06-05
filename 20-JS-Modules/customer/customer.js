/* jshint esversion:6*/
import { Person } from "../person/person.js";

export class Customer extends Person {
  constructor(firstName, lastName, age, designation, location) {
    super(firstName, lastName, age, designation);
    this.designation = designation;
    this.age = age;
    this.location = location;
  }

  getAge() {
    return this.age;
  }
  getLocation() {
    return this.location;
  }
  getDesignation() {
    return this.designation;
  }

  greet() {
    let msg = `
        Hello Mr: ${this.getFirstName()} ${this.getLastName()}
        Age : ${this.getAge()}, Designation: ${this.designation}
        Location : ${this.getLocation()}
        `;
    console.log(msg);
  }
}
