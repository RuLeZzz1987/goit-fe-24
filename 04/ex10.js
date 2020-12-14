const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

// function getAllPropValues(propName) {
//   return products.reduce((acc, product) => {
//     if (product.hasOwnProperty(propName)) {
//       acc.push(product[propName]);
//     }
//
//     return acc;
//   }, []);
// }

function getAllPropValues(propName) {
  const result = [];
  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      result.push(product[propName]);
    }
  }

  return result;
}

console.log(getAllPropValues('name'));

// Например: getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// Например: getAllPropValues('category') возвращает [].