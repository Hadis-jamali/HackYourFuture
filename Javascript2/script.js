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


