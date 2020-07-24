// => user is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo valid
// if any one is missing, stop purchasing

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// if (isLoggedIn){
//     console.log("succesfully logged in");
//     if(isEmailVerified){
//         console.log("email is Verified");
//         if(cardInfo){
//             console.log("you can purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("allow user to make purchase");
} else {
    console.log("u are not allowed to do that");
}