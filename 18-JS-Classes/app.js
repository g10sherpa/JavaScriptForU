/* jshint esversion :6 */

// let mobile = {
//   brand: "apple",
//   price: 45000,
//   color: "silver",
// };

// console.log(mobile);

class Mobile {
  constructor(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
  }
  getBrand() {
    return this.brand;
  }

  setBrand(brand) {
    this.brand = brand;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  printSpecification() {
    let spec = `
                Brand : ${this.getBrand()}
                Price : ${this.getPrice()}
                Color : ${this.getColor()}
                `;

    console.log(spec);
  }
}
let mobile = new Mobile("Apple", 45000, "silver");
mobile.printSpecification();

mobile.setPrice(60000);
mobile.printSpecification();
