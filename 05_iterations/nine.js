const myNumbers = [1, 2, 3, 4];
// const newNumbers = myNumbers.reduce((accumulator, current) => {
//   console.log(`accumulator: ${accumulator}, current: ${current}`);
//   return accumulator + current;
// }, 0);
// console.log(newNumbers);

const shoppingCart = [
  {
    itemName: "Shirt",
    price: 6.9,
  },
  {
    itemName: "Pant",
    price: 8.9,
  },
  {
    itemName: "Car",
    price: 12000,
  },
  {
    itemName: "House",
    price: 100000,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
