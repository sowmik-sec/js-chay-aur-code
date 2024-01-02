// array

const myArray = [0, 1, 2, 3, 4, 5, true, "habibi"];
const myHeros = ["Thor", "Odin"];
const myArray2 = new Array(8, 9, 10);

// console.log(myArray2[1]);
// myArray.push(898);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.unshift(43242);
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(423));

// console.log(myArray.indexOf(2));

// const newArr = myArray.join();
// console.log(myArray);
// console.log(newArr);

// slice, splice
console.log("A ", myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3);
console.log("C ", myn2);
console.log(myn2);
