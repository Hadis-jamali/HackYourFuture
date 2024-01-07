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
const astronauts = document.getElementById("astronaut");

fetch("http://api.open-notify.org/astros.json")
  .then((Response) => Response.json())
  .then((data) => {
    const people = data.people;
    people.forEach((astronaut) => {
      const pTag = document.createElement("p");
      pTag.innerText = astronaut.name;
      astronauts.appendChild(pTag);
    });
  });
