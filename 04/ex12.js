// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return 'На складе недостаточно товаров!'
//   }
//
//   return 'Заказ оформлен, с вами свяжется менеджер';
// }

const checkStorage = (available, ordered) => available < ordered
  ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';


console.log(checkStorage(100, 50));