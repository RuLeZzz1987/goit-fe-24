const users = require('./users');

const calculateTotalBalance = (array) => {
  return array
    .reduce(
      (accumulator, currentValue, index) => {
        console.log(index, accumulator + currentValue.balance);
        return accumulator + currentValue.balance
      }, undefined);
}
//  [object Object]382137932278395114982764

console.log(calculateTotalBalance([]));