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
    