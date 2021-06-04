// let numbers = [10,20,30,40,50,60];
// console.log(`numbers are : ${ numbers}`);

// console.log(numbers[0]);

let colors = ['white', 'black', 'green', 'red', 'yellow', 'blue'];
// let result = ''
// for(let i =0; i<=colors.length-1; i++){
//     result += `${colors[i]} , `;
// }
// console.log(result);

//for in loop
// for(let index in colors){
//     console.log(colors[index]);
// }

//for-off loop
// for(let color of colors){
//     console.log(color);
// }

//forEach
// result = '';
// colors.forEach(function(color){
//     result += `${color} `;
// })
// console.log(result);

//array of objects
let employees = [
    {
        name: 'Shyam bahadur',
        age: 35,
        address: {
            city: 'biratnagar',
            addrss: 'bhalu chowk'
        }
    },
    {
        name: 'hari bahadur',
        age: 28,
        address:{
            city: 'pokhara',
            address: 'prithvi chowk'
        }
    }
]

// console.log(employees);

//iterate employees
result = '';
// for(let employee of employees){
//     result += `${employee.name}, `;
// }
// console.log(result);

//filter :age <= 30
// let juniorEmployees = [];
// for(let employee of employees){
//     if(employee.age <=30){
//         juniorEmployees.push(employee);
//     }
// }
// console.log(juniorEmployees);
