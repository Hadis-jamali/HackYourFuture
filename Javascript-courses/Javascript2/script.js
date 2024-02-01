//DOM

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

//Spirit animal name generator (homework)
const animals = ["dog", "cat", "papi", "bobo", "khoshgele", "hani"];

const input = document.getElementById("input");
const button = document.getElementById("btn");

function showAnimal() {
  var animal = animals[Math.floor(Math.random() * animals.length)];
  alert(input.value + "-" + animal);
}
btn.addEventListener("click", showAnimal);

//exercise in class

/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 *  @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */






function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = ["Parkering", "Elevator", "Altan", "Have", "Husdyr"];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}
generateListings(20);

generateListings(37);
console.log(generateListings(37));
const list = generateListings(37);
const sizeListings = list.forEach((element) => {
  console.log(element.size);
});
const priceListings = list.map((element) => {
  return element.price;
});
console.log(priceListings);

const cheapListings = list.filter((element) => {
  return element.price < 500;
});
console.log(cheapListings);

const expensiveListings = list.filter((element) => {
  return element.price > 500;
});
console.log(expensiveListings);
const priceListingsPrices = expensiveListings.map((element) => {
  return element.price;
});
console.log(priceListingsPrices);
const parkingListings = list.filter((element) => {
  return element.facilities.includes("Parkering");
});
console.log(parkingListings);
