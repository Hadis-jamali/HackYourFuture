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
const number = [1, "2", 3, 4];
const isTrue = number.every((item) => typeof item === "number");
console.log(isTrue);
