// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Вызываем в глобальном контексте
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записываем ссылку на функцию в свойство объекта
// // Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis;

// // Вызываем функцию в контексте объекта
// // this будет указывать на текущий объект, в контексте
// // которого осуществляется вызов, а не на глобальный объект.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// _____________________________________________________________
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback}.`);
// }

// makeMessage(customer.getFullName()); // Будет ошибка при вызове функции

// function greetGuest(greeting1, greeting2) {
//   console.log(`${greeting1}!, ${greeting2} ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// greetGuest.call(poly, "С приездом", "Добро пожаловать"); // С приездом, Поли.
// greetGuest.apply(mango, ["Добро пожаловать", "С приездом"]); // Добро пожаловать, Манго.
// --------------------------------------------------------

// ________________________________________________________
// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Поли"); // "Поли, добро пожаловать в «Gmail»."

// // console.log(greet());
// console.log(steamGreeter("Aleksandr"));
//---------------------------------------------------------

// ________________________________________________________
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции
// makeMessage(customer.getFullName.bind(customer));

// const user = {
//   firstName: "Alex",
//   lastName: "Shmalex",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// makeMessage(customer.getFullName.bind(user));
// ____________________________________________

// --------------------------------------------
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }
// ___________________________________________

// -------------------------------------------
// class User {
//   // Синтаксис объявления метода класса
//   constructor(name, email) {
//     // Инициализация свойств экземпляра
//     this.name = name;
//     this.email = email;
//   }
//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class UserNickname {
//   // Синтаксис объявления метода класса
//   constructor(nickname, score) {
//     // Инициализация свойств экземпляра
//     this.nickname = nickname;
//     this.score = score;
//   }
// }

// let mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// console.log(mango.changeEmail("mangoloid@mail.com"));
// console.log(mango.getEmail());

// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// const mangoNickname = new UserNickname("Freek", 500);
// mango = { ...mango, ...mangoNickname };

// console.log(mango);
// ------------------------------------------------------

// const User = function ({ email, password, name } = {}) {
//   this.name = name;
//   this.email = email;
//   this.password = password;
// };
// User.workInfo = "Diffrent things";
// User.prototype.changePassword = function (newPasswors) {
//   return (this.password = newPasswors);
// };
// const mango = new User({ email: "mango@mail.com", password: 1234567 });
// console.log(mango);
// console.log(mango.changePassword(111));
// console.log(mango);
// console.log(User);
