// for

for (let i = 0; i < 10; i++) {
  //   console.log(i + 1);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + "*" + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];
for (let i = 0; i < myArray.length; i++) {
  //   console.log(myArray[i]);
}

// for (let i = 1; i <= 20; i++) {
//   if (i === 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    // console.log(`5 detected`);
    continue;
  }
  // console.log(`value of i is ${i}`);
}
