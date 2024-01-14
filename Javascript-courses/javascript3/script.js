//practice

// const sidetask = document.getElementById("sidetask");
// const statusfieldElement = document.getElementById("statusfield");
// const dispatchButton = document.getElementById("dispatchButton");

// function dispatchAmbulance(onDispatched) {
//   span.innerHTML = "Countacting ambulance driver...";

//   setTimeout(function () {
//     sidetask.innerText = "";
//     onDispatched(statusfieldElement);
//   }, 1000
//   );
//   sidetask.innerText = "writing doodles while we wait";
// }

// function onAmbulanceDispatched(statusField) {
//   statusField.innerText = "Ambulance is on its way!";
// }
// const handleDispatch = function () {
//   dispatchAmbulance(onAmbulanceDispatched);
// };
// dispatchButton.addEventListener("click", handleDispatch);

//callback

//function fetchData(callback) {
// Simulating an asynchronous operation
// setTimeout(() => {
//   const data = 'Some data fetched';
//   callback(data);
// }, 1000);
//}

//function processData(data) {
// console.log('Processed data:', data);
//}

//fetchData(processData);

//practice
// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");

// let clickCount = 0;
// function handlerClick() {
//   clickCount++;
//   console.log(clickCount);
// }

// button1.addEventListener("click", handlerClick);
// button2.addEventListener("click", handlerClick);
// button3.addEventListener("click", handlerClick3);

// function handlerClick3() {
//   setTimeout(() => {
//     console.log("This text was delayed by 3 seconds");
//   }, 3000);
// }

// //w3 school
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

//  [
//    {
//     "orderName" : "hadis" ,
//     "orderId" : 1 ,
//      "orderPrice" : "40kr" ,
//     "listDrink" : {
//       "name" :"coca cola"
//     } ,
//     {
//       "name" :"cofee"
//     }
//      "extras" :{
//        "chees" : 5
//      }
//    }

//  ]

// const astronauts = document.getElementById("astronaut");

// fetch("http://api.open-notify.org/astros.json")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//     const people = data.people;
//     people.forEach((astronaut) => {
//       const pTag = document.createElement("p");
//       pTag.innerText = astronaut.name;
//       astronauts.appendChild(pTag);
//     });
//   });

// setInterval(() => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((Response) => Response.json())
//     .then((data) => {
//       console.log(data);
//       const img = document.createElement("img");
//       img.src = data.message;
//       dogImage.appendChild(img);

//     });
//     dogImage.innerText = "";
// }, 1000);

// const getImage = () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       // const img = document.createElement("img");
//       const img = document.getElementById("dog-image");
//       img.src = json.message;
//     });
// };

// getImage();

// setInterval(() => {
//   getImage();
// }, 2000);

// function getData() {
//   fetch("http://api.open-notify.org/astros.json")
//     .then((response) => response.json())
//     .then((json) => {
//       updateList(json);
//     });
// }

//3A Unit test pattern
// test("AdditionTest", () => {
//   expect(add(1, 2)).toBe(3);
// });

// test("AdditionTest", () => {
//   //Arrange
//   const a = 1;
//   const b = 2;
//   //Act
//   const c = add(a, b);
// });

// const promise = new promise(function (resolve, reject) {
//   resolve("my result");
// });

// function wait(milliseconds) {
//   return new Promise((resolve) => setTimeout(resolve, milliseconds));
// }

// const printAfter4Second = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 4000);
// });

// printAfter4Second.then(() => {
//   console.log("hello");
// });

// const print = new Promise((resolve, reject) => {
//   if (2 + 3 === 4) {
//     resolve("its 4");
//   } else {
//     reject("its not 4");
//   }
// });
// print
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const answer = document.getElementById("answer");

// fetch("https://yesno.wtf/api")
//   .then((response) => response.json())
//   .then((json) => {
//     getData(json.answer);
//   });

// function getData(answer) {
//   console.log(answer);
//   if (answer === "yes") {
//     fetch("https://knajskdskj.jasdk")
//       .then((response) => response.json())
//       .then((json) => {
//         alert(json);
//       })
//       .catch((err) => {
//         answer.innerText = err;
//       });
//     return;
//   }

//   answer.innerText = answer;
// }

// async function getYesNo() {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const json = await response.json();
//     console.log("response", json);
//   } catch (error) {
//     console, error(error);
//   }
// }
// getImage();

async function astronauts() {
  const response = await fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  );
  const json = await response.json();
  console.log(json);
}

astronauts();
