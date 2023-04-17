const express = require("express");
const cors = require("cors");
const pool = require("./config");

const app = express();

// System middleware
app.use(cors());
app.use(express.json());

app.post("/employees", (request, result) => {
  try {
    console.log(request.body);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("The server is running on port 5000");
});
