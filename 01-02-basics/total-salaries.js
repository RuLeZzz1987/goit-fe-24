/* У нас есть объект, в котором хранятся зарплаты нашей команды.
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function findEmployeeNameWithHighestSalary(salaries) {
  const employees = Object.entries(salaries);
  if (employees.length === 0) {
    return {name: null, salary: null}
  }

  let highestSalary = employees[0][1];
  let employeeName = employees[0][0];
  for (const employee of employees) {
    if (employee[1] > highestSalary) {
      highestSalary = employee[1];
      employeeName = employee[0];
    }
  }

  return {name: employeeName, salary: highestSalary};
}

const result = findEmployeeNameWithHighestSalary({});

console.log('Employee name:', result.name, '| Employee salary:', result.salary);