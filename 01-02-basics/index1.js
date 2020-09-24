'use strict';
// ['foo', ,'bar',undefined, true, 1, ,,,,]


const arr = ['foo', 'bar', null, true, 'last element'];

// console.log(arr.join(' '))

// console.table(arr);

let num = 5;

num = 10;

const arr2 = arr;


console.log('arr2 === arr: ', arr2 === arr);

// console.log(arr[1]);
//
// console.log(arr2[1]);

// console.log(arr)

arr2[2] = 'next string';


// console.log(arr[arr.length - 1]);


// посчитать вес всех людей в лифте

const elevator = [55, 73, 85, 67, 90];

let total = 0;

// for (let index = 0; index < elevator.length; index += 1) {
//   total += elevator[index];
// }

// console.log(total);

// for (const value of elevator) {
//   total += value;
// }

// console.log(elevator)


for (let index = 0; index < elevator.length; index += 1) {
  elevator[index] = `element: ${elevator[index]}`;
}

// console.log(elevator);

// вывести имена короче 5 символов



// for (const client of clients) {
//   if (client.length < 5) {
//     console.log(client);
//   }
// }

// console.log(clients);

// clients[clients.length] = 'David';

// console.log(clients);

// const clientName = 'Poly';

// for (const client of clients) {
//   console.log(`Checking client "${client}"`);
//   if (clientName === client) {
//     console.log(`Client ${clientName} found`);
//     break;
//   }
// }

// fsdff234d-dasd-34234-dasdas2323

// преобразовать в название статьи

const slug = 'tools-should-not-only-be-for-experts-they-should-turn-us-into-them'

const words = slug.split('-');

const title = words.join(' ');

// console.log(words);
// console.log(title[0].toUpperCase() + title.slice(1));


const numbers1 = [324 ,434, 23];
const numbers2 = [12, 23, 12, 11];

const merged = numbers1 + numbers2;

total = 0;

for (let idx = 0; idx < merged.length; idx++) {
  total += merged[idx];
}

// console.log(merged);

// idx++ + ++idx

// idx++;             idx--;
// ++idx;             --idx;
// idx = idx + 1;     idx = idx - 1;
// idx += 1;          idx -= 1;



const clients = ['Mango', 'Poly', 'Ajax', 'Jeff', 'Blake'];

const clientName = 'Polyfsdfdsf';

// for (const client of clients) {
//   if (clientName === client) {
//     console.log(`Client ${clientName} found`);
//     break;
//   }
// }

// console.log(clients);

// console.log(clients.includes(clientName));
//
// console.log(clients.indexOf(clientName) !== -1);

const clientIndex = clients.indexOf(clientName);

// if (clientIndex !== -1) {
//    clients.splice(clientIndex, 1, 'Ben', 'Jack');
// }
//



// console.log(clients.push('Ben'), clients);

const name = clients.pop();

// console.log(name, clients);

const firstName = clients.shift();

// console.log(firstName, clients);

const len = clients.unshift('Jack', 'David');



const otherClients = clients.slice(1);

otherClients.push('FooBar');

console.log(otherClients);
console.log(clients === otherClients)

const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8 ,9]
];

console.table(arr3[1][1]);


// const clients = ['Mango', 'Poly', 'Ajax', 'Michael' ,'Jeff', 'Blake'];

// найти самое длинное имя










// const title = 'Tools should not only be for experts – they should turn us into them';

// преобразовать в slug