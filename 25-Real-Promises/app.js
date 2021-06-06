/* jshint esversion:6*/

let employees = [
  {
    id: 1,
    name: "John",
    age: 29,
  },
  {
    id: 2,
    name: "Peter",
    age: 23,
  },
  {
    id: 3,
    name: "Johnny",
    age: 39,
  },
  {
    id: 4,
    name: "Anderson",
    age: 21,
  },
];

//create Employee
let createEmployee = (employee) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      employees.push(employee);
      let isDone = true;
      if (isDone) {
        resolve();
      } else {
        reject("something went wrong, employee creation failed");
      }
    }, 2000);
  });
};

//get employee
let getEmployees = () => {
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

createEmployee({ id: 3, name: "Jerry", age: 35 })
  .then(() => {
    getEmployees();
  })
  .catch((err) => {
    console.error(err);
  });
