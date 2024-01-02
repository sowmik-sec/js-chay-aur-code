// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 4124323769516237463782652387462864263482634782342n;
// console.log(bigNumber);

// Reference type(Non primitive)
// Array, Objects, Functions

const heros = ["Thor", "Wanda", "Doctor Strange"];

let myObj = {
  name: "Sowmik",
  age: 28,
};

const myFunction = function () {
  console.log("Hello");
};

// console.log(typeof bigNumber);

// *********************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Habib";

let anotherName = myName;
anotherName = "Ahsan";
// console.log(myName);
// console.log(anotherName);

let userOne = {
  email: "user@gmail.com",
  address: "Dallas, Texes",
};

let userTwo = userOne;

userTwo.email = "user2@google.com";
console.log(userOne.email);
console.log(userTwo.email);
