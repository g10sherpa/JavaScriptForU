/*jshint esversion: 6 */
const greet = function () {
  console.log(`hello good morning`);
};

greet();

//with parameters
const person = function (name, age) {
  let details = `hello ${name} you are ${age} yrs old`;
  console.log(details);
};
person("gyamzo", 25);

//return type
let sum = function (a, b) {
  let result = 2 * (a + b);
  return result;
};

console.log(`answer is ${sum(10, 20)}`);
// answer = sum(10,20);
// console.log(`answer is ${answer} `);

//function with an object as parameter
let printObj = function (a) {
  console.log(a);
};
printObj({ name: "gyamzo", age: 25 });

let mobile = {
  brand: "apple",
  color: "red",
  price: 45000,
};
printObj(mobile);

// function with an array as a parameter
let printArray = function (array) {
  let result = "";
  for (let index in array) {
    result += `INDEX : ${index} => VALUE : ${array[index]} \n`;
  }
  console.log(result);
};
printArray([10, 20, 30]);

let colors = ["white", "black", "blue"];
printArray(colors);

//function inside an object
let student = {
  firstName: "gyamzo",
  lastName: "sherpa",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(student.fullName());

//nested function
let outerFn = function () {
  console.log("i m an outer function");
  let innerFn = function () {
    console.log("i m an inner function");
  };
  innerFn();
};
outerFn();

//twisted function
let twistedFn = function () {
  let name = "john";
  let printStudent = function () {
    let student = {
      name: "rajan",
      age: 25,
      course: "react",
    };
    return student;
  };
  return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj.name);

//chicken curry
let glassBowl = function (rawChicken, masala) {
  //marinating the chicken
  let marinatedChicken = `MIXING : (${rawChicken} + ${masala})`;
  return marinatedChicken;
};

let cookingBowl = function (marinatedChicken, water) {
  //cooking logic
  let cookedChicken = `COOKING (${marinatedChicken} + ${water})`;
  return cookedChicken;
};

let eatingPlate = function (cookedChicken, rice) {
  //eating logic
  let eating = `EATING : (${cookedChicken} + ${rice})`;
  console.log(eating);
};

let rawChicken = "2 KG CHICKEN";
let masala = "garlic, pepper, salt";
let marinatedChicken = glassBowl(rawChicken, masala);
let water = "1 ltr water";
let cookedChicken = cookingBowl(marinatedChicken, water);
let rice = "1 kg rice";
eatingPlate(cookedChicken, rice);
