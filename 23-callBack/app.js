/* jshint esversion:6*/
// let sum = (a, b) => {
//   return a + b;
// };

// let mul = (a, b) => {
//   return a * b;
// };

// let calculate = (a, b, callBack) => {
//   let result = "";
//   return callBack(a, b); //sum(a,b)
// };

// let output = calculate(10, 20, sum);
// console.log(output);

// output = calculate(10, 20, mul);
// console.log(output);

// output = calculate(10, 20, (a, b) => {
//   return a - b;
// });
// console.log(output);

let employees = [
  {
    id: 1,
    name: "gyamzo",
    age: 25,
  },
  {
    id: 2,
    name: "rajni",
    age: 29,
  },
];

let createEmployee = (employee, callBack) => {
  setTimeout(() => {
    employees.push(employee);
    callBack();
  }, 2000);
};

let getEmployee = () => {
  setTimeout(() => {
    let employeeRows = "";
    employees.forEach((employee) => {
      employeeRows += `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            </tr>`;
    });
    document.querySelector("#table-body").innerHTML = employeeRows;
  }, 1000);
};

createEmployee({ id: 3, name: "wilson", age: 45 }, getEmployee);
