const user = ["gyamzo", 2, "user"];
// var role = user[2];

var [name, no, role] = user;
// console.log(role);

const MyUser = {
    name: "gyamzo",
    no: 3,
    role:"admin",
};

console.log(MyUser.no);

const {name, my_no, role} = MyUser;
console.log(my_no);