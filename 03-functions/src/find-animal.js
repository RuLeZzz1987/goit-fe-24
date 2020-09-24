// есть ли животное в массиве

const animals = ['🐶', '🐼', '🐸', '🐧', '🐻']


const animal = '🦊'// '🦊';

// for (const animalName of animals) {
//   console.log(`Checking animal "${animalName}"`);
//   if (animal === animalName) {
//     console.log(`Animal ${animal} found`);
//     break;
//   }
// }

const findAnimal = function (animals, animal) {
  for (const animalName of animals) {
    // console.log(`Checking animal "${animalName}"`);
    if (animal === animalName) {
      // console.log(`Animal ${animal} found`);
      return true;
    }
  }

  // console.log(`Animal ${animal} was not found`);
  return false;
}

// console.log(animals.includes(animal));
//
// console.log(findAnimal(animals, animal));

const findAnimalIndex = function(animals = [], animal = '🦊') {
  for (let idx = 0; idx < animals.length; idx += 1) {
    if (animals[idx] === animal) {
      return idx;
    }
  }

  return -1;
}

// console.log(animals.indexOf(animal));
console.log(findAnimalIndex());