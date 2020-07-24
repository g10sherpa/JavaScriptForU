// allow user to access course if he is:
// logged in from email
// logged in from google
// logged in from facebook

var email = true;
var facebook = true;
var google = true;

if(email){
    console.log("email");
}if(google){
    console.log("google");
}if(facebook){
    console.log("facebook");
}else{
    console.log("u can't access");
}

