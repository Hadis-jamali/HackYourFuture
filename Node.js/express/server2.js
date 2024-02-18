import express from "express";
import meals from "./meal.js";

const app = express();
app.get("/meals", (req, res) => {
  res.json(meals);
});
app.get("/runMeal", (req, res) => {
  const meal = meals[Math.floor(Math.random() * meals.length)];
  res.json(meal);
});
app.listen(3000, () => console.log("hi"));
