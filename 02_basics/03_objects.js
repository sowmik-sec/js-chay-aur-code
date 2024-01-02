// singleton

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Ahsan",
  "full name": "Ahsan Habib",
  age: 28,
  [mySym]: "myKey1",
  location: "UK",
  email: "ahsan@google.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Saturday"],
};

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "habib@google.com";
// console.log(jsUser.email);

// Object.freeze(jsUser);
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};

// console.log(jsUser.greeting());
jsUser.greeting();
jsUser.greetingTwo();
