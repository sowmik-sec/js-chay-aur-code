// if
// const isUserLoggedIn = true;

// const temperature = 41;

// if (temperature === 41) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }

// const balance = 1000;
// if (balance > 500) console.log("you are rich");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("greater or equal 1000");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allowed to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}
