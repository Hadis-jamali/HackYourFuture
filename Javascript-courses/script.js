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
