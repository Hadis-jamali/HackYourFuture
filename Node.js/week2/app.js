const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search");
});

app.get("/search", (req, res) => {
  const query = +req.query.q;

  if (!query) {
    res.json(documents);
  } else {
    const filteredDocuments = documents.filter((doc) => {
      // Check if any field in the document includes the query
      return Object.values(doc).some((value) => value.toString().includes(query));
    });

    res.json(filteredDocuments);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//GET /documents/:id

router.get("/documents/:id", (req, res) => {
  const documentId = +req.params.id;
  const document = documents.find((doc) => doc.id === documentId);
  if (document) {
    res.json(document);
  } else {
    res.status(404).send("Not Found");
  }
});
