var city = new Array("Kathmandu", "pokhara", "Burtamod", "Butwal")
// console.log(city[1]);

// console.log(city.length);

city[0]="Dhangadi";
// console.log(city);

var user = new Array("Gyamzo", 25, "Thamel", "Coding", 20);

user.pop(); //two pop two data deleted
user.pop(); //remove data, pop remove data from last sequentially
// console.log(user);

user.unshift("Laxmi"); //add in the array 1st position
console.log(user);

user.shift(); //remove unshift data
console.log(user);

console.log(user.indexOf("Gyamzo"));
