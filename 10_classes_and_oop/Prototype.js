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
myHeros.sowmik();
myHeros.heySowmik();
// heroPower.heySowmik();
