//format number such as 1,000,000
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
let formatNumber = (number) => {
  let result = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(number);
  return result;
};

let newRange = document.querySelector("#range");
let newAmount = document.querySelector("#amount");

newRange.addEventListener("input", () => {
  let selectedAmount = newRange.value;
  newAmount.innerText = formatNumber(selectedAmount);
});
