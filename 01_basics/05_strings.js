const gameName = new String("Ahsan-Habib-Sowmik");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("S"));

const newString = gameName.substring(0, 3);
// console.log(newString);

const anotherString = gameName.slice(0, 4);
// console.log(anotherString);

const newStringOne = "         Habibi       ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://youtube.com/ahsan%20habib";
console.log(url.replace("%20", "-"));

console.log(url.includes("hab"));

console.log(gameName.split("-"));
