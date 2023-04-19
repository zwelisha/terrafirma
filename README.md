# Terra-Firma Employee Management App

## Getting Started

### Requirements

1. Node.Js Version v18.8.0 or higher
2. Text editor (Recommended: VSCode or SublimeText or Atom)
3. Express 4.18.1
4. Cors 2.8.5
5. Postgres 14
6. Bootstrap 4.6.2

### Installation

#### 1. Node

The installation depends on the operating system, click [here](https://nodejs.org/en/) for details. On Mac using Homebrew run `brew install node` on Linux `sudo apt install nodejs`

#### 2. Text Editor

Any text editor of your choice can be used. However Visual Studio Code and Atom are highly recommended.

#### 3. Express

Run `npm install express` if you are on windows or mac. For a different OS, see click [here](https://expressjs.com/)

#### 4. Cors

Run `npm install` this command will ensure all the required packages are installed.

#### 5. Postgresql

To install postgres, download the installer [here](https://www.postgresql.org/download/), first select your OS.

#### 6. Bootstrap 4.6.2

There is no need to install Bootstrap since I used CDN links

#### Folder Structure

There are two folders in the parent folder `terrafirma`. This folder contains all the files to run both the backend and the frontend. Frontend folder `frontend`, backend folder `backend`.

```
frontend
    node_modules
    public
        favicon_io
        favicon.ico
        index.html
        manifest.json
        robots.txt
        terralogo.svg
        terralogopng.png
    src
        components
            CreateEmployee.js
            DisplayEmployee.js
            EditEmployee.js
        App.css
        App.js
        index.css
        index.js
        reportWebVitals.js
    package-lock.json
    package.json
backend
    node_modules
    database.sql
    config.js
    index.js
    package-lock.json
    package.json
.gitignore
README.md

```

### Formatting The Code

I prefer to use Prettier for consistency, but you are welcome to make suggestions.
To install Prettier and read documentation. Please see [here](https://prettier.io/)

#### formatting a file example

On VS code, yu can change your settings to format after saving.
Select Prettier as your code formatter

### Running The Project

#### 1. Clone the project

```
git clone https://github.com/zwelisha/terrafirma
```

#### 2. Change Directory (To the root folder of the project)

##### Setup DB

1. first create a database. From postgres, postgres username (main default DB), create a database using the database name, port and password from config.js in the backend folder, in a file called `config.js`. I assume you have installed Postgres using the installer.
   using a shell or the PG UI. Create a  database and an employees table

   


    `CREATE DATABASE siyacodamaindb;`
    Then 

   `CREATE TABLE employees ( employee_id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL,
        surname VARCHAR(50) NOT NULL, age INT NOT NULL, address VARCHAR(255) NOT NULL,department VARCHAR(100) NOT NULL
    );
    `

Running this command will prevent errors from posting, puting and editing API functions on the backend.

Change directory to the project `cd terrafirma`.
There you will see the folder structure detailed above.

Then to run this app: run the following command

```
cd frontend
```

```
npm start
```

##### Run the backend

from the root folder `terrafirma`

Run `cd backend`

Then run `nodemon index`

From here the world is your oyster!
Have fun!

### Important Note

1. No testing was done on this code. I would have used Jest for testing react, Jasmine for the server side code if it was an actual project and with enough time.
2. No code validation was done. I believe the most crucial thing is to do crude.
3. Lastly, the code is responsive but there is a lot to be done to make it user friendly in terms of writing proper responses based on API request status.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Authors

[Zweli Mthethwa](https://www.linkedin.com/in/zweli-mthethwa-244b45a8/)
