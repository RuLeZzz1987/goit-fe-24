const filter = function(array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};


const array = ['🐶', '🐼', '🐸', '🐧', '🐻', '🐼']

function testIsPanda(element) {
  return element === '🐼';
}

function testIsFromSublist(element) {
  return ['🐶', '🐼', '🐸'].includes(element);
}

const getAllPandas = filter(array, testIsPanda);
console.log(getAllPandas);
const getAllFromSublist = filter(array, testIsFromSublist);
console.log(getAllFromSublist);