'use strict';

/*
* Задача: пользователь приходит в нелегальный магазин минералов, указывает сколько у него есть денег.
*   Вводит сколько он хочет купить минералов. После этого если количество запрошенных товаров соотвествует скидке,
*   ему предоставляется скидка: три по цене двух, если количество товара кратно трём или 10%, если количество больше пяти.
*   К сумме товара добавляется НДС, в зависимости от указанного штата.
*   После совершения покупки, предложить пользователю посетить магазин еще раз
* */

let balance;

// если пользователь за 3 попытки не вводит количество наличности,
// то мы прекращаем с ним взаимодействия и в магазин он не зайдет
for (let i = 0; i < 3; i += 1) {
  balance = Number(prompt(`Enter amount, "${i + 1}" attempt `)); // сразу преобразовываем ввод в число

  // проверяем что баланс есть т.к. если пользователь нажмет ESC, balance будет NaN,
  // если же не NaN, то проверим, что он больше 0
  if (balance && balance > 0) {
    // нам не нужно повторно запрашивать 2 раза balance,
    // если пользователь его ввел с 1й попытки и мы прекратим цикл
    break;
  }
}

// другой вариант назойливо запрашивать баланс у пользователя пока он не введет число больше 0
// while (!balance || balance < 0) {
//   balance = Number(prompt('Enter amount'));
// }

const mineralsPrice = 10;
let mineralsInStock = 20;
let quantity;

let isWannaShopping = true;

// для входа в цикл нужно соблюсти все условия. пользователь хочет шоппиться, у нас есть минералы, баланс не NaN и больше 0
while (isWannaShopping && mineralsInStock && (balance && balance > 0)) {

  do {
    quantity = Number(prompt('Enter quantity?'));
  } while (!quantity || quantity < 0); // цикл с постусловием. запрашиваем количество товара, а потом проверяем, стоит ли продолжать цикл или нет

  // если запрошено больше, чем у нас есть
  if (mineralsInStock < quantity) {
    console.log(`naf naf minerals. only ${mineralsInStock} in stock`);
    // пропускаем все и запускаем цикл по новому
    continue;
  }

// 3 по цене 2
// > 5 - 10%

  let discount;
  const state = 'GA';
  let salesTaxRate;


  // подсчитываем скидку
  if (quantity % 3 === 0) {
    discount = (mineralsPrice * quantity) / 3;
  } else if (quantity > 5) {
    discount = mineralsPrice * quantity * 0.1;
  } else {
    discount = 0;
  }

  // подсчитываем скидку с помощью тернарного оператора,
  // даже в таком простом виде с дополнительной вложенностью он уже плохочитаем
  // discount =  quantity % 3 === 0 ? (mineralsPrice * quantity) / 3 : quantity > 5 ? mineralsPrice * quantity * 0.1 : 0;


  // подсчитываем НДС в зависимости от штата
  switch (state) {
    case 'WA': {
      salesTaxRate = 0.065;
      break;
    }
    // если в нескольки штатах одинаковый рейт НДС, то нет смысла дублировать логику
    // выполним одну и ту же логику для разных кейсов
    case 'LA':
    case 'AL':
    case 'GA':
    case 'NY': {
      salesTaxRate = 0.04;
      break;
    }
    // не забываем про значение по умолчанию, которое сработает, если не сработал ни один case
    default: {
      salesTaxRate = 0.1;
    }
  }

  // считаем стоимость со скидкой
  let total = mineralsPrice * quantity - discount;
  // считаем размер налога
  let salesTax = total * salesTaxRate;

  // добавляем налог
  total += salesTax;

  // проверяем, что у пользователя достаточно средств для оплаты покупки
  if (balance >= total) {
    // если достаточно, то платим, уменьшаем количство запасов и выводим в консоль красивую запись
    balance -= total;
    mineralsInStock -= quantity;
    console.log(`spent: ${total.toFixed(2)}$, balance left: ${balance.toFixed(2)}`);
  } else {
    // если недостаточно, то выводим просто красивую запись, что пользователь ничего не купил
    console.log(`Required ${total.toFixed(2)}$ but only ${balance.toFixed(2)}$ left`);
  }

  // обнуляем все переменные перед следующей итерацией, в данном случае не обязательно, но так мы перестраховываемся
  quantity = undefined;
  discount = undefined;
  salesTaxRate = undefined;

  // предлагаем пользователю зайти в магазин еще раз.
  isWannaShopping = confirm('Do you wanna continue shopping?'); // всегда вернет true если нажали "ok" и false, если отмена
}
// console.log(`total price: ${total.toFixed(2)}$ with discount: ${discount.toFixed(2)} and with sales tax: ${salesTax.toFixed(2)}`);













// условие ? кейс если услвоие true : условие ложное

// discount = quantity % 3 === 0 ?
//   (mineralsPrice * quantity) / 3
//   :
//   quantity > 5
//     ?
//     mineralsPrice * quantity * 0.1
//     :
//     0;