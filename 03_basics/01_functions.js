function sayMyName() {
  console.log("hi, Habibi");
}

// sayMyName();

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(addTwoNumbers(3, 5));

function loginUserMessage(username = "Sowmik") {
  if (username !== undefined) {
    return `${username} just logged in`;
  } else {
    console.log("Please enter a username");
    return;
  }
}

// console.log(loginUserMessage("Ahsan Habib"));

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(102, 234, 342));

const user = {
  username: "Ahsan",
  age: 28,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user);

handleObject({ username: "habib", age: 28 });

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
