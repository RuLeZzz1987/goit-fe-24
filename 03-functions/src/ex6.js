// Обьясните разницу между этим
const getSortedUniqueSkills = array =>
  array
    .reduce((allSkills, user) => {
      allSkills.concat(user.skills);
      return allSkills;
    }, [])   // вернет пустой массив, метод concat не работает

const getSortedUniqueSkills = array =>
  array
    .reduce((allSkills, user) => {
     return allSkills.concat(user.skills);
         }, []) // вернет массив с элементами