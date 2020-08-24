// Lexical Scoping defines how variable 
// names are resolved in nested functions: 
// inner functions contain the scope of 
// parent functions even if the parent 
// function has returned.

// function nit(){
//     var firstName = "gyamzo"
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     sayFirstName();
// }
// nit();

var scope = "I am global";
function whatismyscope() {
//   var scope = "I am just a local";
  function func() {
    console.log(scope);
  }
  func();
}

whatismyscope();