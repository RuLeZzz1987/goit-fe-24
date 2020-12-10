const createCounter = function() {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;

  const increment = function() {
    privateValue += 1;
    console.log(privateValue);
  };

  return increment;
};

const incrementA = createCounter();
incrementA(); // 1
incrementA(); // 2

const incrementB = createCounter();
incrementB(); // 1
incrementB(); // 2
incrementB(); // 3
