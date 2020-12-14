const numbers = [1, 2, 3, 5, 8, 13, 21];

const summ = numbers.reduce(
  function (acc, value) {
    return acc + value
  }, 0
);

let sum = 0;
for (const num of numbers) {
  sum += num;
}


console.log(summ); // 15
