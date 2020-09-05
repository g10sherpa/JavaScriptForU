/*
Classes are in fact "special functions", and just 
as you can define function expressions and function 
declarations, the class syntax has two components: 
class expressions and class declarations.
*/

class person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  #courseList = [];

  getInfo() {
    return {
      name: this.name,
      address: this.address,
    };
  }

  enrollCourse(name) {
    this.#courseList.push(name);
  }

  getCourseList() {
    return this.#courseList;
  }

  login(){
    return "you are logged in";
  }
}

class subAdmin extends person{
  constructor(name,address){
    super(name, address); //The super keyword is used to access and call functions on an object's parent.
  }
  getAdminInfo(){
    return "i m another user";
  }

  login(){
    return "login for admin only";
  }
}

module.exports = person;

const hero = new person("hero", "pokhara");
//console.log(hero.getInfo());
hero.enrollCourse("angular");
// console.log(hero.getCourseList());
// console.log(hero.courseList);

const jerry = new subAdmin("jerry", "pokhara");
console.log(jerry.getAdminInfo());
console.log(jerry.login());
console.log(jerry.getInfo());
