// Immediately Invoked Function Expressions (IIFE)

(function fun() {
  console.log("DB CONNECTED");
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Volga");
