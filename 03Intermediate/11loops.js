// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

const myCity = [
    "Kathmandu",
    "Pokhara",
    "Birtamod",
    2020,
    "Dharan",
    "Butwal",
];

for(let i=0; i<myCity.length; i++){
    if(typeof myCity[i] !== "string") break; //continue
    console.log(myCity[i]);
}

// let i = 0;
// while(i<myCity.length){
//     console.log(myCity[i]);
//     i++;
// }

// let i = 0;
// do{
//   console.log(myCity[i]);
//   i++;
// }while(i<10);
