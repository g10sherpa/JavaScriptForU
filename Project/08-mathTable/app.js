let numberEl = document.querySelector("#req-number");
numberEl.addEventListener("keyup", () => {
  let theNumber = Number(numberEl.value);
  document.querySelector("#number").innerText = theNumber;
  calculate();
});

let rangeEl = document.querySelector("#multiplier");
rangeEl.addEventListener("input", () => {
  let selectedNumber = Number(rangeEl.value);
  document.querySelector("#multiplies").innerText = selectedNumber;
  calculate();
});

//calculate
let calculate = () => {
  let theNumber = Number(document.querySelector("#number").innerText);
  let multiplier = Number(document.querySelector("#multiplies").innerText);
  let finalResult = theNumber * multiplier;
  document.querySelector("#result").innerText = finalResult;
};
