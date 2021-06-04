var sellingPrice = 500;
var listingPrice = 900;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount percentage is : " + discountPercent + " % ");

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + " % off");

var result = sellingPrice < listingPrice;

console.log(typeof result);