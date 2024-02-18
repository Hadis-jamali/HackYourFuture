import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>hadis</h1>");
});
app.listen(3030, () => console.log("i am runing"));

// app.get('/search',(req,res)={
//     res.sent('')
// })
