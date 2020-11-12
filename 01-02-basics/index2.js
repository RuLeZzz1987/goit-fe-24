// "Объясните пожалуйста по какому принципу работает этот код а именно начиная с цикла for.

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100
}
/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}
/*
name: Resort Hotel
stars: 5
capacity: 100
*/