/* jshint esversion:6*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  greet() {
    let msg = `
    Welcome Mr: ${this.getFirstName()} ${this.getLastName()}
    `;

    console.log(msg);
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, designation) {
    super(firstName, lastName);
    this.age = age;
    this.designation = designation;
  }

  getAge() {
    return this.age;
  }

  getDesignation() {
    return this.designation;
  }

  greet() {
    let msg = `
        Hello Mr: ${this.getFirstName()} ${this.getLastName()}
        Age : ${this.getAge()}, Designation: ${this.designation}
        `;
    console.log(msg);
  }
}

class Customer extends Employee {
  constructor(firstName, lastName, age, designation, location) {
    super(firstName, lastName, age, designation);
    this.location = location;
  }

  getLocation() {
    return this.location;
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

let customer = new Customer("John", "toe", 38, "manager", "Samakhusi");
customer.greet();
