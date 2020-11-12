/*
* Напиши скрипт управления личным кабинетом интернет банка.
* Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
* */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,
  nextId: 400,

  getNextId() {
    this.nextId += 1;
    return this.nextId;
  },

  // История транзакций
  transactionsList: [],
  transactionsMap: {},

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: this.getNextId(),
      amount,
      type
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactionsList.push(transaction);
    this.transactionsMap[transaction.id] = transaction;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    if (amount > this.balance) {
      console.error('Naf-Naf Minerals!');
      return;
    }

    this.balance -= amount;
    this.transactionsList.push(transaction);
    this.transactionsMap[transaction.id] = transaction;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactionsMap[id] || null;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    if (!Object.values(Transaction).includes(type)) {
      console.error(`Unknown transaction type "${type}"`);
      return;
    }

    let total = 0;

    for (const transaction of this.transactionsList) {
      if (transaction.type !== type) {
        continue;
      }

      total += transaction.amount;
    }

    return total;
  },
};

console.log(account.getTransactionDetails(300));
account.deposit(1200)
account.withdraw(700)
account.withdraw(800)
account.deposit(300)
console.log(account.getTransactionTotal('unknown'))
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionDetails(401));