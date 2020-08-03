var user = {
  firstName: "gyamzo",
  lastName: "sherpa",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    console.log(user);
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

// var courseList = true;
// console.log(user.getCourseCount());
// user.buyCourse("React");
// user.buyCourse("python");
// console.log(user.getCourseCount());

function info(){
  console.log(user);
  var courseList = true;
  console.log(user.getCourseCount());
  user.buyCourse("React");
  user.buyCourse("python");
  console.log(user.getCourseCount());
}

info();
