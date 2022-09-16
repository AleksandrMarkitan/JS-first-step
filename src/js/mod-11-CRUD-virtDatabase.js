// Інсталяція віртуального бекенду: npm i --save-dev json-server
// внести зміни в файл package.json, а саме в об'єкт "scripts" додати:
// "server": "json-server --watch db.json"
// запуск сервера:  npm run server

const BASE_URL = 'http://localhost:3000/cars';

const newCar1 = {
  car: 'Tesla',
  type: 'model X',
  price: 45000,
  img: 'https://encrypted-tbn0.gstatic.com/',
};

const newCar2 = {
  car: 'Tesla',
  type: 'model S',
  price: 35000,
  img: 'https://images.app.goo.gl/71Zen5P3uZRi5ApH9',
};

const changeCar1 = {
  price: 40000,
};

function addCar(car) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: car,
  };
  return fetch(`${BASE_URL}`, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json;
  });
}

function updateCarById(car, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  };
  return fetch(`${BASE_URL}/${id}`, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json;
  });
}

function deleteCarById(...ids) {
  const options = {
    method: 'DELETE',
  };
  for (id of ids) {
    fetch(`${BASE_URL}/${id}`, options).then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json;
    });
  }
}

// addCar(newCar1).then(console.log).catch(error=>console.log(error));
// addCar(newCar2).then(console.log).catch(error=>console.log(error));

// updateCarById(changeCar1, 8).then(console.log).catch(error=>console.log(error));

// deleteCarById(8, 10, 11, 12, 13, 14, 15).then(console.log).catch(error=>console.log(error));
