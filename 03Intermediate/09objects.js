var user = {
    firstName: "gyamzo",
    lastName: "sherpa",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true
}

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);

user.loginCount=23;
console.log(user.loginCount);
console.table(user);