// let myName = "Sowmik";

// console.log(myName.trueLength);

let myHeros = ["thor", "hulk"];
let heroPower = {
  thor: "hammer",
  hulk: "muscle",
  getHulkPower: function () {
    console.log(`Hulk power is ${this.hulk}`);
  },
};

Object.prototype.sowmik = function () {
  console.log(`sowmik is present in all objects`);
};

Array.prototype.heySowmik = function () {
  console.log(`Sowmik says hello`);
};

// heroPower.sowmik();
// myHeros.sowmik();
// myHeros.heySowmik();
// heroPower.heySowmik();

const User = {
  name: "Ahsan",
  email: "ah@san.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Shohidul      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"ice cream".trueLength();
