
function sumOne(a,b){
    return a + b;
}

var myA = [5,4,1];
console.log(sumOne(...myA)); //spread operator
/*
Spread syntax (...) allows an iterable such as 
an array expression or string to be expanded 
in places where zero or more arguments (for function calls) 
or elements (for array literals) are 
expected, or an object expression to be 
expanded in places where zero or more 
key-value pairs (for object literals) are 
expected.
*/


function sumTwo(a,b,...args){//rest operator
    console.log(args);
/*
Rest syntax looks exactly like spread syntax. 
In a way, rest syntax is the opposite of spread syntax. 
Spread syntax "expands" an array into its elements, 
while rest syntax collects multiple elements 
and "condenses" them into a single element
*/

  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}

console.log(sumTwo(2,3,1,4,5));