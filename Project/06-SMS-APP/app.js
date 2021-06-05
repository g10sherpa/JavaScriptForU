/*jshint esversion: 6 */
let txtArea = document.querySelector("#text-area");
let charCount = document.querySelector("#char-count");
txtArea.addEventListener("keyup", () => {
  let textLength = txtArea.value.length;
  charCount.innerText = textLength;
});
