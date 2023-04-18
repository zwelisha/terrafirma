import React, { Fragment } from "react";
import "./App.css";
import CreateEmployee from "./components/CreateEmployee";

function App() {
  return (
    <Fragment>
      <div className="container">
        <CreateEmployee />
      </div>
    </Fragment>
  );
}

export default App;
