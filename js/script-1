// // Массив

// Чтобы залогинить массив в виде таблицы, необходимо ввести:
// console.table(имя_массива)

// // Для изменения элемента массива исользуем классический for

// const clients1 = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients1.length; i += 1) {
//   console.log(clients1[i]);
//   clients1[i] += "-best";
//   console.log(clients1[i]);
// }

// // Чтобы просто перебрать элементы массива используем for...of

// const clients2 = ["Mango", "Ajax", "Poly"];

// for (const client of clients2) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// // Функция. Создание массива при объявлении функции

// const fn = function (...randommassiv) {
//   console.log(randommassiv);
// };

// fn("hello", 1, 2, 3, 4, 5);

// // Д\з

// console.log("Автопроверка");

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// function getExtremeElements(array) {
//   // Change code below this line
//   const newarray = array.splice(1, array.length - 2);
//   console.log(array);

//   return array;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

//   const arrayOfWords = message.split(" ");
//   console.log(arrayOfWords);
//   const totalEngravingCost = arrayOfWords.length * pricePerWord;
// console.log (totalEngravingCost);

// return totalEngravingCost;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
// string = array.join(delimeter);

// console.log(string);
//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// function makeArray(firstArray, secondArray, tmaxLengh) {
//     // Change code below this line
// let newArray = firstArray.concat(secondArray);
// console.log(newArray);
//   newArray.length > tmaxLengh ? array = newArray.slice(0, tmaxLengh) : array = newArray;
//     console.log(array);
//     return array;

//     // Change code above this line
//   }
//   makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)

//   function calculateTotal(number) {
//  // Change code below this line
//  let sum = 0;

// for (let i = 0; i <= number; i += 1) {
//   console.log(i);

//     sum+= i;
//              console.log(sum);
// }
// return sum;

//   // Change code above this line
// }

// calculateTotal(3);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {

//     total+= order[i];
//              console.log(total);
// }
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function findLongestWord(string) {
//   // Change code below this line
// const array = string.split(' ');
// console.log(array);

// let word;
// let LongestWord = array[0];
// for (let i = 0; i < array.length; i += 1) {

// word = array[i];

// console.log(word.length, word);

// if (word.length > LongestWord.length) {
// LongestWord = word;
// }

// }
// console.log('Longest Word Is:', LongestWord);
// return LongestWord;

//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (i = min; i <= max; i +=1) {
//   numbers.push(i)
// }
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(5, 25);

// function filterArray(numbers, value) {
//    // Change code below this line
// let newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       console.log(number);
//       newArray.push(number);
//     }
//   }
//   console.log(newArray);
//   return newArray;

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return console.log(fruits.includes(fruit)); // Change this line
// }
// checkFruit("plum");

// function getCommonElements(array1, array2) {
//   // Change code below this line
//  let newArray = [];
// for (const element of array1) {
//   if (array2.includes(element)) {
// newArray.push(element);
//   }
// }
// console.log(newArray);
// return newArray;
//  // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// function getEvenNumbers(start, end) {
//    // Change code below this line
// let arrayEvenNumbers = [];
// for (let i=start; i<=end; i+=1) {
//   if (i%2===0) {
//     arrayEvenNumbers.push(i);
//   }
// }
// console.log(arrayEvenNumbers);
// return arrayEvenNumbers;
//     // Change code above this line
//   }
//   getEvenNumbers(6, 12);

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// до рефакторинга
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }
// // после рефакторинга
// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0)
//       return i;
//   }
//   // Change code above this line
// }

// function includes(array, value) {
//   // Change code below this line

// for (const number of array) {

//   if (number===value) {
//     console.log('t');
//     return true;

//   }

// }

// console.log('f');
//   return false;
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3)
