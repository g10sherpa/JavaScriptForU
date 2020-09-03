//import person from "./06classes";

const person = require("./06classes");

const gyamzo = new person("gyamzo","kathmandu");

console.log(gyamzo.getInfo());

gyamzo.enrollCourse("nodeJS");
gyamzo.enrollCourse("REactJS");
console.log(gyamzo.getCourseList());

let courses = gyamzo.getCourseList();
courses.forEach((c) => console.log(c));