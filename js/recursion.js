// https://learn.javascript.ru/recursion
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3));
// ------------------------------------------------------
//
let company = {
  // тот же самый объект, сжатый для краткости
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: {
      junes: [
        { name: "Jack", salary: 500 },
        { name: "Sara", salary: 500 },
      ],
      middle: [
        { name: "Vano", salary: 1300 },
        { name: "Kiko", salary: 1300 },
        { name: "Nino", salary: 1300 },
      ],
    },
  },
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else {
    // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 6700
