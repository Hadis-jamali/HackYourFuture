//forEach
// const numbers = [1, 2, 3, 4];
// const newNumbers = [];

// numbers.forEach((number) => {
//   newNumbers.push(number * 2);
// });
// console.log(newNumbers);

//map
// const numbers = [1, 2, 3, 4];
// const newNumbers = numbers.map((number) => number * 2);
// console.log(newNumbers);

//find & filter (boolean migirn or not)
// const numbers = [1, 2, 3, 4];
// const result = numbers.find((number)=>{number===5}) ;
// console.log(result) ;

// reduce
// const numbers = [1, 2, 3, 4];
// const result= number.reduce((acc,cur)=>{acc+cur} , 0);
// console.log(result);

//every-some
// const number = [1, "2", 3, 4];
// const isTrue = number.every((item) => typeof item === "number");
// console.log(isTrue);

// let userName = "hadis";
// let id = "10";
// let fav = "music";
// let taxtRate = 0.34;
// let isName = true;
// console.log("Hadis Jamali " + userName);
// console.log(fav + taxtRate + " units");
// console.log(+id + age);
// console.log(typeof id);

// let user1 = ["hadis", "jamali", "reza"];
// user1[user1.length - 1]; //akharin khone

//Json
const jsonString = `
{
  "firstName":"hadis",
  "fav": ["game","swiming"]
}
`;
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.firstName);

//Age-ify (A future age calculator)

const yearOfBirth = 1995;
const yearFuture = 2045;
console.log(typeof yearFuture);
const curentYear = 2023;
const age = curentYear - yearOfBirth;
console.log(age);
const futureAge = yearFuture - curentYear + age;
console.log(futureAge);
console.log(`You will be ${futureAge} years old in ${yearFuture}`);

//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2018;
const dogYearFuture = 2045;
const dogYear = 2023;
const result = dogYear - dogYearOfBirth;
console.log(result);
const dogFutureAge = dogYearFuture - dogYear + result;
console.log(dogFutureAge);
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true) {
  console.log(`Your dog will be ${dogFutureAge} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogFutureAge} human years old in ${dogYearFuture}`);
}

//Housey pricey (A house price estimator)

const volumeInMeters1 = 8 * 10 * 10;
const housePrice1 = 2500000;
const gardenSizeInM2Peter = 100;
const calculatedHousePrice = volumeInMeters1 * 2.5 * 1000 + gardenSizeInM2Peter * 300;
if (housePrice1 > calculatedHousePrice) {
  console.log("too expensive");
} else if (housePrice1 === calculatedHousePrice) {
  console.log("price is good");
} else {
  console.log("cheap");
}

const volumeInMeters2 = 5 * 11 * 8;
const housePrice2 = 1000000;
const gardenSizeInM2Julia = 70;
const calculatedHousePrice2 = volumeInMeters2 * 2.5 * 1000 + gardenSizeInM2Julia * 300;
if (housePrice2 > calculatedHousePrice2) {
  console.log("too expensive");
} else if (housePrice2 === calculatedHousePrice2) {
  console.log("price is good");
} else {
  console.log("cheap");
}

//Ez Namey (Startup name generator) Optional

const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Nice",
  "Great",
  "Big",
  "Team",
  "Prety",
  "Beautiful",
  "Brilliant",
];
const secondWords = [
  "Hope",
  "Vestas",
  "Dansk",
  "Fotex",
  "Rema",
  "Jysk",
  "Ikea",
  "Lidl",
  "Aldi",
  "Asus",
];

// const randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);
// const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
// console.log(startupName);
// console.log(startupName.length);

const name1 = "hadis";
console.log("my name is ", name1[name1.length - 1]);
const number = 24 * 55;
const newNumber = number;
console.log(newNumber);
const favorite = ["football", "game", "film", 21, 41, 80, false, true, true];
console.log(favorite[3]);

const ageMen = 80;
const priceTicket = 200;
if (ageMen <= 2) {
  priceTicket = 0;
  console.log("you have free ticket");
} else if (ageMen >= 3 && ageMen <= 18) {
  console.log("you have 15% discount");
} else if (ageMen >= 19 && ageMen <= 26) {
  console.log("you have 10% discount");
} else if (ageMen >= 60) {
  console.log("you have 70% discount");
} else {
  console.log("you dont have discount");
}

//HomeWork Exercise Three
for (let i = 10; i >= 0; i--) {
  console.log(i);
  if (i === 10) {
    console.log("OMG it started");
  } else if (i === 0) {
    console.log("Happy new year");
  } else {
    console.log(i);
  }
}

//HomeWork Exercise Three-B
const friendsList = ["Chris", "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"];

//practice DOM
// const button = document.querySelector("button");

// button.addEventListener("click", showHandler);
// const showHandler = () => {
//   console.log("hi");
// };
//class week3

function sumNum(num1 = 0, num2 = 0) {
  if (num1 < 0 || num2 < 0) {
    return "hahaha";
  }
  return num1 + num2;
}
const end = sumNum();
console.log(end);

function min(num1, num2) {
  if (num1 < num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
min(-2, 4);
//Flight booking fullname function && Formal fullname
function getFullname(firstname, surname, sex, useFormalName = false) {
  if (useFormalName === true) {
    if (sex === "woman") {
      return `lady ${firstname} ${surname}`;
    } else if (sex === "man") {
      return `Lord ${firstname} ${surname}`;
    }
  } else {
    return `${firstname} ${surname}`;
  }
}
const fullname1 = getFullname("Benjamin", "Hughes", "woman", true);
const fullname2 = getFullname("hadis", "R", "man", false);
const fullname3 = getFullname("hadis", "R");

//Event application
const today = 3;
function getEventWeekday(days) {
  return (days % 7) + 3;
}
const eventAplication = getEventWeekday(3);
console.log(eventAplication);

//Weather wear
function weatherWear(temperature) {
  const clothesToWear = "jacket";
  if (temperature <= 15) {
    return `you should wear ${clothesToWear}`;
  } else {
    return `you should wear T-shirt`;
  }
}

//Student manager && addStudentToClass function

const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Please add someone to the class!");
  }
  for (let i = 0; i < class07Students.length; i++) {
    if (class07Students[i] === studentName) {
      console.log(`${studentName} is already in the class`);
      return;
    }
  }
  if (class07Students.length < 7) {
    class07Students.push(studentName);
  } else if (studentName === "Queen") {
    console.log(`welcome to the class my Queen `);
  } else {
    console.log("can not add more student");
  }
}
// class07Students("reza");
// class07Students("hadis");
// class07Students("daisy");
// class07Students("atefe");

function getNumberOfStudents() {
  return class07Students.length;
}
//Candy helper optional
const boughtCandyPrices = [];

const amountToSpend = Math.random() * 100;

const candyPriceTable = [
  {
    type: "Sweet",
    price: 0.5,
  },
  {
    type: "Chocolate",
    price: 0.7,
  },
  {
    type: "Toffee",
    price: 1.1,
  },
  {
    type: "Chewing-gum",
    price: 0.03,
  },
];
function addCandy(candyType, weight) {
  for (let i = 0; i < candyPriceTable.length; i++) {
    if (candyType === candyPriceTable[i].type) {
      boughtCandyPrices.push(candyPriceTable[i].price * weight);
      break;
    }
  }
}
function canBuyMoreCandy() {
  let sum = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    sum += boughtCandyPrices[i];
  }
  if (amountToSpend > sum) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("sorry!you dont have money,Enough candy for you!");
  }
}
addCandy("Sweet", 20);
addCandy("Chocolate", 30);
addCandy("Toffee", 50);

//Javascript warmup

const names = ["Peter", "Ahmad", "Yana", "kristina", "Rasmus", "Samuel", "katrine", "Tala"];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}
console.log(names);

//When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);

function calculateTravelTime(travelInformation) {
  if (travelInformation.destinationDistance <= 0 || travelInformation.speed <= 0) {
    return "Distance and speed must be more than zero.";
  }

  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.floor((time - hours) * 60);

  return `The travel time is ${hours} hours and ${minutes} minutes.`;
}

//Series duration of my life homework-javascript1-week3

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "suits",
    days: 7,
    hours: 2,
    minutes: 0,
  },
  {
    title: "Breaking bad",
    days: 2,
    hours: 2,
    minutes: 0,
  },
];

let totalTimeMinutes = 0;

for (const series of seriesDurations) {
  const { days, hours, minutes } = series;
  const totalMinutes = days * 24 * 60 + hours * 60 + minutes;
  totalTimeMinutes += totalMinutes;
}

const totalMinutesInLifespan = 80 * 365 * 24 * 60;

const percentageOfLifespan = (totalTimeMinutes / totalMinutesInLifespan) * 100;

console.log(`Total time spent watching TV series: ${totalTimeMinutes} minutes`);
console.log(
  `Percentage of an 80-year lifespan spent watching TV series: ${percentageOfLifespan.toFixed(2)}%`
);

// logOutSeriesText();

//exercise in class

function printNumber(number) {
  for (let i = 0; i <= number; i++) {
    const result1 = i % 2 === 0 ? "even" : "odd";
    console.log(`The number is ${result1}.`);
  }
}
printNumber(20);
printNumber(5);

function isEven(number) {
  return number % 2 === 0;
}
for (let i = 0; i <= 20; i++) {
  if (isEven(i)) {
    console.log(`${i} is even`);
  } else console.log(`${i} is odd`);
}

//fibonacci function

function fibonacci(n) {
  const fibs = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 1]);
  }
  return fibs[n];
}
for (let i = 0; i < 20; i++) {
  // console.log(fib(i));
}
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     if(){

//     }
//     for (i = 3; i <= num; i++)
//     {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return num2;
// }
// console.log(fibonacci(1));
// (fibonacci(12));

function highAndLow(numbers){
  let number =numbers.split(' ') ;
  let lowest =parseInt(number[0]);
  let highest =parseInt(number[0]);
  for(let i=0 ;i<number.length ;i++){
    if(parseInt(number[i])>highest){
      highest =number[i]
    }
    if(parseInt(number[i])<lowest){
      lowest=number[i]
    }
  }
  let result = highest + ' ' + lowest;
  return result
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");



function highAndLow2(numbers){

  var numArray = numbers.split(" ");
  var max      = Number(numArray[0]);
  var min      = Number(numArray[0]);
  var num;
  
  for(var i = 1; i< numArray.length; i++){
  
    num = Number(numArray[i]);
    
    if(num > max) max = num;
    if(num < min) min = num;
  }
  
  return max + " " + min;
  
  }