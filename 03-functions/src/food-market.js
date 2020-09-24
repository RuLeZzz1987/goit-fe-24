'use strict';

const food = ['🍟', '🍔', '🌭'];
const drinks = ['🍺', '🥤', '☕'];

// const chooseFood = (foodType) => {
//   if (foodType === 'burger') {
//     return '🍔';
//   }
//
//   if (foodType === 'hotDog') {
//     return '🌭';
//   }
//
//   return '🍟';
// }

const chooseFood = (foodType) => foodType === 'burger' ? '🍔' : foodType === 'hotDog' ? '🌭' : '🍟';

const withDrink = (...args) => {
  if (args[0] === 'beer') {
    return `chosen ${args[1]} with 🍺`;
  }

  if (args[0] === 'cola') {
    return `chosen ${args[1]} with 🥤`;
  }

  return `chosen ${args[1]} with ☕`;
}

console.log(withDrink('beer', chooseFood('IDontKnow')));