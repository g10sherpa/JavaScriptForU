// let laptop = {
//     name : 'MSI',
//     color: 'black',
//     price: '125000',
//     RAM: '16gb',
//     SDD: '128gb',
//     HDD: '1TB',
//     Graphic : '6gb 1050 Ti',
//     processor: 'intel core i7, 9th generation'
// }

// console.log(laptop.name);

// let prop = 'color';
// console.log(laptop[prop]);

// let student = {
//     name: 'gyamzo sherpa',
//     address: {
//         city: "kathmandu",
//         country: 'Nepal'
//     }
// }

// console.log(student);
// console.log(student.address.city);

let mobile = {}

mobile.brand = "apple",
mobile.color = "red",
mobile.price = 60000

console.log(mobile);

//update
console.log(mobile.price); //60000
mobile.price = 50000;
console.log(mobile);

//delete
delete mobile.color;
console.log(mobile);