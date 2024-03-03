import express from "express";
import contactRouter from "./contact.js";

import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", contactRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
