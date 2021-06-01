var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval( () => {
    if(count < 1000){
        count++;
        counter.innerText=count;
    }
}, 4);

setTimeout( () => {
    followers.innerText="followers on instagram";
},0);
