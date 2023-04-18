const express = require("express");
const cors = require("cors");
const pool = require("./config");

const app = express();

// System middleware
app.use(cors());
app.use(express.json());

app.post("/employees", async (request, response) => {
  try {
    const name = request.body.name;
    const surname = request.body.surname;
    const age = request.body.age;
    const address = request.body.address;
    const department = request.body.department;

    const employee = await pool.query(
      "INSERT INTO employees (name, surname, age, address, department) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, surname, age, address, department]
    );
    response.json(employee);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("The server is running on port 5000");
});
