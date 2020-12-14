const arr = Array(3)
  .fill('')
  .map((e,i) => ({[`index: ${i}`]: i }));

console.log(arr);

/* [ { index: 0 }, { index: 1 }, { index: 2 } ] */