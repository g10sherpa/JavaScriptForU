// define a function that can answer the role of a user.
// a user can be on following roles:
// admin - with all access
// subadmin - with access to create/delete courses
// testprep - with access to create/delete tests
// user - consume all content
// other - trial user

var getUserRole = function (name, role){
    switch (role) {
      case "admin":
        return `${name} is admin with all access`;
        // break;

      case "subadmin":
        return `${name} is subadmin access to create and delete`;
        // break;

      case "testprep":
        return `${name} is testprep with access to create n delete tests`;
        // break;

      case "user":
        return `${name} is a user and can access to view content`;
        // break;

      default:
        // break;
    }
}

console.log(getUserRole("gyamzo", "admin"));

var getRole = getUserRole("samm", "user");

console.log(getRole);
