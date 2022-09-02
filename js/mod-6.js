// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector(".js-btn");

// // ✅ Работает
// mango.showUsername();

// // ❌ this будет ссылаться на button если использовать showUsername как callback
// // btn.addEventListener("click", mango.showUsername); // не работает

// // // ✅ Не забывайте привязывать контекст методов объекта
// // btn.addEventListener("click", mango.showUsername.bind(mango));

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// btn.addEventListener("click", handleClick);

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// /** */
// const user = friends
//   .filter(({ name, books }) => books.includes("Harry Potter"))
//   .reduce((acc, { name }, i, arr) => {
//     return (acc += `${i + 1} ${name}\n`);
//   }, `Кількість юзерів ${"?"}\n`);

// console.log(user);

// Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// Not found
let people1 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Alex"],
  },
];
//Not found
const people2 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

// jhon
const people3 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

function findePeople(people) {
  const suspected = people.filter(({ know }) => !know.length);
  console.log(suspected);
  if (suspected.length !== 1) {
    console.log("not found");
    return;
  }
  const narcis = suspected[0].name;
  console.log(narcis);
  const responce = people.every(
    ({ name, know }) => know.includes(narcis) || name === narcis
  );

  if (responce) {
    console.log(narcis);
  } else {
    console.log("not found");
  }
}

findePeople(people3);

people1 = people1.filter(({ know }) => know.includes("Jhon"));

console.log(people1);

let products = [
  {
    id: "sku1",
    qty: 1,
  },
  {
    id: "sku2",
    qty: 2,
  },
  {
    id: "sku3",
    qty: 3,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku1",
    qty: 8,
  },
  {
    id: "sku2",
    qty: 19,
  },
  {
    id: "sku4",
    qty: 1,
  },
];

// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а той обє'кт який співпав видалити з масиву.
// (Потрібно мутувати даний масив, створювати новий не потрібно)

// 1. Застосувати цикл фор
// 2. Знайти об'єкти, в яких однакові айді
// 3. Знайти суму квонтіті цих об'єктів
// 4. Видалити знайдені об'єкти з масиву

// function getNewProductsArr(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[j].id === arr[i].id) {
//         arr[i].qty += arr[j].qty;
//         arr.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
// }

// getNewProductsArr(products);
// console.log(products);

// function getNewProductsArr(arr) {
//   // arr.reduce((acc, elem, i, arr) => {
//   //   const newObj = arr.filter((elem) => elem === qty);
//   // }, {});

//   arr.sort((a, b) => a.id.localeCompare(b.id));
//   for (let i = arr.length - 1; i === 0; i -= 1) {
//     if (arr[i].id === arr[i - 1].id) {
//       arr[i - 1].qty += arr[i].qty;
//       arr.splice(i, 1);
//       console.log(arr);
//     }
//   }
// }

// products = getNewProductsArr(products);
// console.log(products);

function changeArray(array) {
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    console.log(element);
  }
}
changeArray(products);
