// Обьясните, пожалуйста, почему даже на этапе присваивания(еще до начала вызовов counterA.increment();
// counterB.increment();)  две переменные не равны? Это ж сложный тип, присвоение по ссылке?
// И до вызова increment значение privateValue не меняется. Я запуталась. Спасибо

const createCounter = function() {
  let privateValue = 0;

  const increment = function() {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();

const counterB = createCounter();

console.log(counterA === counterB);
