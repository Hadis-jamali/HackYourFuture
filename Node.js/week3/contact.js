import express from "express";
const router = express.Router();

const contacts = [
  {
    id: 1,
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    id: 2,
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    id: 3,
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    id: 4,
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["Javascript", "Gaming", "Foxes"],
  },
];

router.get("/api/contact", (req, res) => {
  res.json(contacts);
});

router.post("api/contact", (req, res) => {
  const contact = req.body;
  contacts.push(contact);
  if (contact) {
    res.json({ message: "new contact" });
  }
});

router.get("api/contacts/:id", (req, res) => {
  const userId = req.query.id;
  if (!userId) {
    res.status(401).json({ message: "" });
  }
});

router.put("api/contacts/:id", (req, res) => {
  const updateId = contacts.find((contact) => contact.id === +req.params.id);
  if (updateId) {
    
  }
});
export default router;
