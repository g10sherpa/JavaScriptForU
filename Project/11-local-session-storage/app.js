/*
    localStorage => string => JSON.stringify() , parse()
        setItem('key', 'value'); //create , update
        getItem('key'); //read
        removeItem('key'); //delete
        clear();

    sessionStorage =>
        setItem('key', 'value'); //create , update
        getItem('key'); //read
        removeItem('key'); //delete
        clear();
*/

// local storage for simple string
let empName = "John";

//set
localStorage.setItem("name", empName);

//get
console.log(localStorage.getItem("name"));

//remove
localStorage.removeItem("name");

//clear
localStorage.clear();

//local storage with array
let colors = [
  {
    id: 1,
    name: "white",
  },
  {
    id: 2,
    name: "green",
  },
  {
    id: 3,
    name: "blue",
  },
];
localStorage.setItem("colors", JSON.stringify(colors));

let theColors = JSON.parse(localStorage.getItem("colors"));
console.log(theColors);

localStorage.removeItem("colors");

//session storage with simple string
let studentName = "Rajan";

sessionStorage.setItem("name", studentName);

//get
console.log(sessionStorage.getItem("name"));

//delete
sessionStorage.removeItem("name");
sessionStorage.clear("name");
