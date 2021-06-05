/*jshint esversion: 6 */
let printMessage = (message, color) => {
  let h1Tag = document.querySelector("#msg-1");
  h1Tag.innerText = message;
  h1Tag.style.backgroundColor = color;
  h1Tag.style.padding = "15px";
  h1Tag.style.boxShadow = "0 0 10px black";
};

//good morning
let gmButton = document.querySelector("#gm-btn");
gmButton.addEventListener("click", function () {
  printMessage("Good Morning 😊", "limegreen");
});

//good afternoon
let gaButton = document.querySelector("#ga-btn");
gaButton.addEventListener("click", function () {
  printMessage("Good Afternoon 😍", "grey");
});

//good evening
let geButton = document.querySelector("#ge-btn");
geButton.addEventListener("click", function () {
  printMessage("Good evening 😜", "brown");
});

//good night
let gnButton = document.querySelector("#gn-btn");
gnButton.addEventListener("click", function () {
  printMessage("Good Night 💋", "black");
});
