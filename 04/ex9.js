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

const uniqueSkills = Object.keys(users.reduce((skills, user) => {
  user.skills.forEach(skill => {
    skills[skill] = true;
  })

  return skills;
}, {})).sort();

console.log(uniqueSkills);













