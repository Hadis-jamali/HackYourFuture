import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const userId = +req.query.userId;
  if (userId !== 1) {
    res.status(401).json({ message: "not allow" });
  }
});

router.get("/update-users", (req, res) => {
  const userId = +req.header["user-id"];
  if (userId !== 1) {
    res.status(401).json({ message: "not allow" });
  }
  res.json({});
});




//next()
//next() mesle else mimone ke vaghti ma ye router.get() darim
//vaghti minevisim if in shart bargharar nbashe ino nshon bede vali ye next
//minevisim ke bere to get badi k bgim ag oon shart bargharar nbod in karo kon.
