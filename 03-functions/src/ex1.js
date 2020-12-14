const array = [1, 2, 3, 0, 4, 5, 6];

const answer = array.reduceRight((acc, num) =>
    acc.hitZero
      ?
      acc :
      num === 0
        ?
        {...acc, hitZero: true} :
        {...acc, sum: acc.sum + num}
, {sum: 0, hitZero: false});

console.log(answer.sum);

let sum = 0;
for (let i = array.length - 1; i >= 0; i -= 1) {
  if (array[i] === 0) {
    break;
  }

  sum += array[i];
}

console.log(sum);