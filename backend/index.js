const express = require("express");
const cors = require("cors");

const app = express();
// System middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("The server is running on port 5000");
});
