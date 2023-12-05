//class practice
// const body = document.querySelector("h1");
// const newEl = document.createElement("h2");
// newEl.textContent = "hi i am hadis";
// body.appendChild(newEl);

// const btn = document.createElement("button");
// btn.innerText = "click here";
// //ma to khate badi () ro baraye function nminevisim ke sari anjam nashe bedone click
// btn.addEventListener("click", iHaveName);
// function iHaveName() {
//   console.log("hello word");
// }

const dishes = ["ghormesabzi", "pizza", "fish"];
const ulTag = document.getElementById("food-list");

// console.log(ulTag);
dishes.forEach((food) => {
  const liTag = document.createElement("li");
  liTag.innerText = food;
  ulTag.appendChild(liTag);
});

const animals = ["dog", "cat", "papi", "bobo", "khoshgele", "hani"];

const input = document.getElementById("input");
const button = document.getElementById("btn");

function showAnimal() {
  var animal = animals[Math.floor(Math.random() * animals.length)];
  alert(input.value + "-" + animal);
}
btn.addEventListener("click", showAnimal);
