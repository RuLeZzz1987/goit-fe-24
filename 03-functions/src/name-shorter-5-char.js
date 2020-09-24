'use strict';

// вывести имена короче 5 символов

const clients = ['Mango', 'Poly', 'Ajax', 'Jeff', 'Blake'];

for (const client of clients) {
  if (client.length < 5) {
    console.log(client);
  }
}
