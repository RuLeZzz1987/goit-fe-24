const key = 'person';
const getKey = function() {
  return 'age';
};

// Computed properties
const object = {
  [(function foo() { console.log('Do nothing')}).toString()]: 'Nothing',
  [{ok: 'ok'}]: 'empty object',
  [[1,2,3]]: 'array',
  [true]: 'this is true',
  [key]: 'Mango',
  [getKey()]: 2,
  capital: 'Kyiv',
  'other-city': 'Kharkiv',
  "one-more-city": "NY"
};

console.log(object.capital);
console.log(object['other-city']);
console.log(object['one-more-city']);

console.log(JSON.stringify(object, null, 2)); // {person: 'Mango', age: 2}