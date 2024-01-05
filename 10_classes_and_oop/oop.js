const user = {
  username: "sowmik",
  loginCount: 3,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);

// user.getUserDetails();

// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("sowmik", 3, true);
const userTwo = new User("habib", 8, false);
console.log(userOne.constructor);
// console.log(userTwo);
