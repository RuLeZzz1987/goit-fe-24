const users = require('./users');

// const someVal = users.map (({name, email}) => ({name, email}));

// console.log(users[0].friends[0])

const isAgeBetween = age => {
  const larger = age > 10;
  const smaller = 100 > age;

  return larger && smaller;
}


const activeUserNames = users
  .filter(({age}) => isAgeBetween(age))
  .map(({email, name}) => ({email, name}));

// const employee = users.find(user => user.id === '150b00fb-dd82-427d-9faf-2879ea87c695');
// if (employee) {
//   console.log(employee.name);
// }

console.log(activeUserNames);