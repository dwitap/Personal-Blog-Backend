const express = require("express");
const cors = require("cors");

const PORT = 3001;
const app = express();

const dataRoute = require("./routes/dataRoute");
const projectRoute = require("./routes/projectRoute");

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

app.use("/data", dataRoute);
app.use("/project", projectRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
