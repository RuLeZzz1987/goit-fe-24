const greet = function(guest, guest2) {
  return `${guest} and ${guest2}, welcome to ${this.name}!`;
};

const hotel = { name: 'Resort Hotel' };
const hotel2 = { name: 'Vegas Hotel' };



const hotelGreeter = greet.bind(hotel, 'Mango').bind(hotel2, 'FooBar');

console.log(hotelGreeter('Polly')); // "Mango, wellcome to Resort Hotel!"


function fnA() {
  const objectB = {};

  return function fnC(key, value) {
    objectB[key] = value;

    return objectB;
  }
}