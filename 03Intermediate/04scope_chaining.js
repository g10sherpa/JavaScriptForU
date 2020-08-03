var name = "Gyamzo";

console.log("no.3 ", name);

function sayName() {
  var name = "mr.gyamzo";
  console.log("no.6 ", name);
  sayNameTwo();

  function sayNameTwo() {
      var name = "mr.ggg";
    console.log("no.7", name);
  }
}

sayName();
