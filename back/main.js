const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "300kb" }));
const port = 3001;

app.post("/", (req, res) => {
  console.log(req.headers);
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
