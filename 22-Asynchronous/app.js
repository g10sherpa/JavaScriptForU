/* jshint esversion:6*/

console.log("car 1");
console.log("car 2");
setTimeout(() => {
  console.log("car 3");
}, 3000);
console.log("car 4");
console.log("car 5");
console.log("car 6");

//doesn't stop the process even though the car 3 is having some problem, others car will continue to work ..
