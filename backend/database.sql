
-- Things like name, surname, age, address
CREATE DATABASE employeemanagement;

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    department VARCHAR(100) NOT NULL
)