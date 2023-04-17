const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = 3001;
const app = express();

const aboutData = require("./routes/dataRoute");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/data", aboutData);

app;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
