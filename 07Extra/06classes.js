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
  courseList = [];

  getInfo() {
    return {
      name: this.name,
      address: this.address,
    };
  }

  enrollCourse(name) {
    this.courseList.push(name);
  }

  getCourseList() {
    return this.courseList;
  }
}

module.exports = person;