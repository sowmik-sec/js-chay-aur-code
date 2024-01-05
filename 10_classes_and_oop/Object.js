function multiplyBy5(num) {
  this.num = num;
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(3));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const user = new createUser("sowmik", 5);
const user2 = new createUser("habib", 10);

user.printMe();
