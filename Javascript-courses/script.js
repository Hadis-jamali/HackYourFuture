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

//find & filter (boolean migirn)
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

let userName = "hadis";
let id = "10";
let fav = "music";
let taxtRate = 0.34;
let isName = true;
console.log("Hadis Jamali " + userName);
console.log(fav + taxtRate + " units");
console.log(+id + age);
console.log(typeof id);

let user1 = ["hadis", "jamali", "reza"];
user1[user1.length - 1]; //akharin khone

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

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log(startupName);
console.log(startupName.length);
