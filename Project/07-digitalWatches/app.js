//nepal time
let nepalWatch = () => {
  let options = { timeZone: "Asia/Kathmandu" };
  let currentDate = new Date().toLocaleDateString("en-US", options);
  let currentTime = new Date().toLocaleTimeString("en-US", options);
  document.querySelector("#nepal-date").innerText = currentDate;
  document.querySelector("#nepal-time").innerText = currentTime;
};
setInterval(nepalWatch, 1000);

let usaWatch = () => {
  let options = { timeZone: "America/New_York" };
  let currentDate = new Date().toLocaleDateString("en-US", options);
  let currentTime = new Date().toLocaleTimeString("en-US", options);
  document.querySelector("#usa-date").innerText = currentDate;
  document.querySelector("#usa-time").innerText = currentTime;
};
setInterval(usaWatch, 1000);

let londonWatch = () => {
  let options = { timeZone: "Europe/London" };
  let currentDate = new Date().toLocaleDateString("en-US", options);
  let currentTime = new Date().toLocaleTimeString("en-US", options);
  document.querySelector("#london-date").innerText = currentDate;
  document.querySelector("#london-time").innerText = currentTime;
};
setInterval(londonWatch, 1000);

let ausWatch = () => {
  let options = { timeZone: "Australia/Sydney" };
  let currentDate = new Date().toLocaleDateString("en-US", options);
  let currentTime = new Date().toLocaleTimeString("en-US", options);
  document.querySelector("#aus-date").innerText = currentDate;
  document.querySelector("#aus-time").innerText = currentTime;
};
setInterval(ausWatch, 1000);
