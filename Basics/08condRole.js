// create an application with following rules
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var options = "user";

switch (options) {
  case "admin":
    console.log("you get full access");
    break;

  case "subadmin":
    console.log("you get access to cretae n delete courses");
    break;

  case "testprep":
    console.log("you get access to create/delete tests");
    break;

  case "user":
    console.log("you get access to view content");
    break;

  default:
      console.log("trial user");
    break;
}