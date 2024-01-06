const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const myNewObject = Object.create(null);
const chai = {
  name: "masala chai",
  price: 10,
  isAvailable: true,
  orderChai: function () {
    console.log("no chai");
  },
};

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
