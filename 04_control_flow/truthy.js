// const userEmail = "h@hitesh.ai";
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log(`Don't have user email`);
}

// falsy values -> false, null, undefined, 0, -0, BigInt 0n, "", NaN
// except all falsy values, all values are truthy value
// truthy -> "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 101 ?? 10;

console.log(val1);

// Ternary Operator
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice >= 80
  ? console.log("greater than or equal to 80")
  : console.log("less than 80");
