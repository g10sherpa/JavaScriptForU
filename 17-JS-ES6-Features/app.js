/*jshint esversion: 6 */

// 1) Template strings (`) back tick operator

// let mobile = {
//   brand: "apple",
//   color: "red",
//   price: 35000,
// };

// let msg1 = `BRAND : ${mobile.brand} COLOR : ${mobile.color} PRICE : ${mobile.price}`;
// console.log(msg1);

// let template1 = `<ul>
//                     <li>${mobile.brand}</li>
//                     <li>${mobile.color}</li>
//                     <li>${mobile.price}</li>
//                 </ul>`;
// console.log(template1);

// 2) optional parameters
let greet = (name, age = 35) => {
  let msg = `hello ${name} you are ${age} yrs old`;
  console.log(msg);
};
greet("John");

let printNumbers = (startNumber, endNumber = 20) => {
  let result = "";
  for (let i = startNumber; i <= endNumber; i++) {
    result += `${i} `;
  }
  console.log(result);
};
printNumbers(5, 10);

// 3) array function
let printNumbers2 = () => {
  let msg = "";
  for (let i = 0; i <= 10; i++) {
    msg += `${i} `;
  }
  return msg;
};
result = printNumbers2();
console.log(result);

//usage of arrow function
let employees = [
  {
    name: "Shyam bahadur",
    age: 35,
  },
  {
    name: "hari bahadur",
    age: 28,
  },
];

//Junior employees
let juniorEmp = employees.filter((employee) => {
  return employee.age <= 30;
});
console.log(juniorEmp);

//limitation of arrow function
//this keyword doesn't work in arrow function, it only works in normal function
let student = {
  firstName: "sita maya",
  lastName: "situ",
  fullName: () => {
    return `${student.firstName} ${student.lastName}`;
  },
};
console.log(student.fullName());

// 4)for off loop
//normal for loop
let answer = "";
for (let i = 0; i <= employees.length - 1; i++) {
  let employee = employees[i];
  answer += `${employee.name.toUpperCase()} `;
}
console.log(answer);

//for in loop
answer = "";
for (let index in employees) {
  let employee = employees[index];
  answer += `${employee.name.toUpperCase()} `;
}
console.log(answer);

//forEach of Es5
answer = "";
employees.forEach(function (employee) {
  answer += `${employee.name.toUpperCase()}`;
});
console.log(answer);

//for off 0f ES6
answer = "";
for (let employee of employees) {
  answer += `${employee.name.toUpperCase()} `;
}
console.log(answer);

// 5) Destructuring
let person = {
  name: "john reddy",
  age: 23,
  course: "MBA",
  address: {
    street: "new city",
    city: "kolkata",
  },
  hobbies: {
    regular: {
      id: 1,
      regHobbies: ["Reding books", "playing cricket"],
    },
    occasional: {
      id: 1,
      occHobbies: ["singing", "visiting"],
    },
  },
};

let { street, city } = person.address;
console.log(`Street : ${street}
            CITY: ${city}`);

let { regHobbies } = person.hobbies.regular;
console.log(regHobbies);

// 6) spread operator ...
let numbers = [10, 20, 30, 5, 40, 45, 55, 65];
let min = Math.min(...numbers);
console.log(min);

let array1 = ["white", "black", "blue", "purple"];
let array2 = ["green", "red", "silver", "golden"];
let colors = [...array1, ...array2];
console.log(colors);
