const user = {
  username: "Ahsan",
  age: 28,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Habib";
// user.welcomeMessage();

// console.log(this);

// function test() {
//   let username = "Sowmik";
//   console.log(this.username);
// }

// test();

const fun = () => {
  let username = "Sowmik";
  console.log(this);
};

// fun();

const addTwo = (num1, num2) => num1 + num2;

const obj = () => ({ username: "Ahsan" });

console.log(addTwo(3, 6));

// const myArray = [2,5,7,3,9];
// myArray.forEach()
