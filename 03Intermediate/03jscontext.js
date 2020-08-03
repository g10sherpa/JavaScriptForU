// execution context
// 1. variable object
// 2. scope chain
// 3. this

// function declarations are scanned and made available
// variable declarations are scanned and made undefined

sayHello();
function sayHello(){
    console.log("this is true");
}

var myName = "gyamzo";
if(myName ===window.myName){
    console.log("this is true again");
}