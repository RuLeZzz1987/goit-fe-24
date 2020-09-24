'use strict';

// сложить продукты в холодильник

const fridge = [];

const insert = function (fridge1, ...args) {
  debugger;
  for (const food of args) {
    fridge1.push(food);
  }

  return fridge1;
}


console.log(insert(fridge, '🍓', '🍆', '🥥', '🥝', '🍉', '🍊'));
console.log(insert(fridge, '🍕', '🥬', '🍍'));
console.log(insert(fridge, '🥩', '🍗', '🍰', '🌶'));

// console.log(fridge);