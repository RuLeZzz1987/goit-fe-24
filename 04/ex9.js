const users = require('./users');

// const emails = users.reduce((acc, user) => {
//   acc.push(user.email);
//   return acc;
// }, []);

// console.log(emails);

// const activeUsers = users.reduce((acc, user) => {
//   if (user.isActive) {
//     acc.push(user);
//   }
//
//   return acc;
// }, []);
//
// console.log(activeUsers);

// const uniqueSkills = Object.keys(users.reduce((skills, user) => {
//   user.skills.forEach(skill => {
//     skills[skill] = true;
//   })
//
//   return skills;
// }, {})).sort();


const uniqueSkills = users.reduce((skills, user) => {
  user.skills.forEach(skill => {
    skills.add(skill);
  })

  return skills;
}, new Set());


console.log(uniqueSkills.get('ipsum'))

// let arr = [1, 3, 3, 4, 5, 6, 6, 6, 8, 4, 1]
// const arr2 = arr;
//
// console.log(arr === arr2);
//
// let unique_numbers = [...new Set(arr)];
// console.log(unique_numbers);
// [1,3, 4, 5, 6, 8]


console.log(uniqueSkills);













