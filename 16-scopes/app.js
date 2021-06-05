/*jshint esversion: 6 */
/*
    1) Block scope
    ex: statement block, if, for , switch, while

    2) Function Scope
    ex: functions
*/

//JS Block Scopes
let a = 10;
{
  //let a = 20;
  {
    //let a = 30;
    {
      //let a = 40;
      console.log(a);
    }
  }
}
//console.log(a);

//block Scope
let course = "engineering";
if (course === "engineering") {
  let dept = "software";
}
console.log(course);
//console.log(dept);

//function
let greet = () => {
  let msg = "good morning";
  console.log(msg);
};
greet();
//console.log(msg);
