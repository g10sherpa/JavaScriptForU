var myApp = new Map();

myApp.set(1, "one");
myApp.set(2, "two");
myApp.set(3, "three");
myApp.set(4, "four");

console.log(myApp);

// for(let key of myApp.keys()){
//     console.log(`key is ${key}`);
// }

// for (let value of myApp.values()) {
//   console.log(`value is ${value}`);
// }

for (let [key,value] of myApp) {
  console.log(`key is ${key} and value is ${value}`);
}

//keys are consider as indexes in forEach loop

myApp.forEach((v,k) => 
    console.log(`${v} and key is ${k}`));

myApp.delete(2);
console.log(myApp);
