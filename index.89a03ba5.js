var BASE_URL="http://localhost:3000/cars",newCar1={car:"Tesla",type:"model X",price:45e3,img:"https://encrypted-tbn0.gstatic.com/"},newCar2={car:"Tesla",type:"model S",price:35e3,img:"https://images.app.goo.gl/71Zen5P3uZRi5ApH9"},changeCar1={price:4e4};function addCar(t){var e={method:"POST",headers:{"Content-Type":"application/json"},body:t};return fetch("".concat(BASE_URL),e).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json}))}function updateCarById(t,e){var r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch("".concat(BASE_URL,"/").concat(e),r).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json}))}function deleteCarById(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n={method:"DELETE"},o=!0,a=!1,c=void 0;try{for(var i,h=e[Symbol.iterator]();!(o=(i=h.next()).done);o=!0)id=i.value,fetch("".concat(BASE_URL,"/").concat(id),n).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json}))}catch(t){a=!0,c=t}finally{try{o||null==h.return||h.return()}finally{if(a)throw c}}}
//# sourceMappingURL=index.89a03ba5.js.map
