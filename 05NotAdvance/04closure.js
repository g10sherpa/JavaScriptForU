// function init(){
//     var firstName = "gyamzo";
//     console.log("i m init");

//     function sayFirstName(){
//         console.log(firstName);
//     }
//     sayFirstName();
// }
// var value = init();
// value();

// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function’s scope from 
// an inner function. In JavaScript, closures are created every time 
// a function is created, at function creation time.

function addition(x){
    return function(y){
        return x + y;
    };
}

var add = addition(5);
console.log(add(4));

console.log(addition(6)(6)); //curring
