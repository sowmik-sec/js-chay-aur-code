// for of

const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "Hello world!";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

const map = new Map();
map.set("BN", "Bangladesh");
map.set("USA", "United States of America");
map.set("Fr", "France");
// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":", value);
// }

const myObject = {
  game1: "nfs",
  game2: "alphalt",
};

// for (const [key, value] of myObject) {
//   console.log(key, " ", value);
// }

const myCoding = [
  {
    languageName: "javascript",
    languageFileExtension: "js",
  },
  {
    languageName: "java",
    languageFileExtension: "java",
  },
  {
    languageName: "python",
    languageFileExtension: "py",
  },
];

myCoding.forEach((item) => {
  const { languageName, languageFileExtension } = item;
  console.log(
    "Programming language name: ",
    languageName,
    ", extension: ",
    languageFileExtension
  );
});
