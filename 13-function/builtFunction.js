/*jshint esversion: 6 */
//built in functions
// shift() => remove first element from array
let technologies = ["html", "css", "javascript", "react", "bootstrap"];
technologies.shift();
console.log(technologies);

// unshift() => add first element to array
technologies.unshift("nodeJS");
console.log(technologies);

// push() => add last element to array
technologies.push("Photoshop");
console.log(technologies);

// pop() =>remove last element from array
technologies.pop();
console.log(technologies);

// sort() =>sort array in ascending order
technologies.sort();
console.log(technologies);

// reverse() =>reverse the array elements
technologies.reverse();
console.log(technologies);

// splice(index) => it removes all the elements from the given index
technologies.splice(4, 1, "angular");
console.log(technologies);

// join() =>to join the array elements to string
let techString = technologies.join(" & ");
console.log(techString);

// split() =>to split a string to an array
let newTechs = techString.split(" & ");
console.log(newTechs);

//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

//Note: filter() does not execute the function for array elements without values.

//Note: filter() does not change the original array.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length < 6);
console.log(result);

//find()
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
