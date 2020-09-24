'use strict';

// посчитать вес всех людей в лифте

const elevator = [20, 30, 40, 60, 90];

// let total = 0;

// for (let index = 0; index < elevator.length; index += 1) {
//   total += elevator[index];
// }

// for (let index = 0; index < elevator.length; index += 1) {
//   elevator[index] = `element: ${elevator[index]}`;
// }

// for (const value of elevator) {
//   total += value;
// }

// consor


// const calcWeight = function (weights) {
//   let total = 0;
//
//   for (const value of weights) {
//     total += value;
//   }
//
//   console.log(`Total weight: ${total}`);
//
//   return total;
// }

const calcWeight = function (weights, idx) {
  return idx < weights.length
    ? weights[idx] + calcWeight(weights, idx + 1)
    : 0;
}



// 1 1 2 3 5 8 13 21 ...
// const fib = function(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }


console.log(`results: ${calcWeight(elevator, 0)}`);
console.log(elevator);

// console.log(fib(10));


