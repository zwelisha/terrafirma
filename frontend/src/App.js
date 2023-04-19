import "./App.css";
import React, { Fragment } from "react";
import CreateEmployee from "./components/CreateEmployee";
import DisplayEmployees from "./components/DisplayEmployees";
const codeVersion = require("../package.json");

function App() {
  return (
    <Fragment>
      <img
        className="mx-auto d-block"
        valign="middle"
        width={150}
        src="../terralogopng.png"
        alt="TERRA-FIRMA UPDATED LOGO"
      />
       <hr />
      <h3 className="text-center text-primary">
        Terra-Firma Employee Management App
      </h3>
      <hr />
      <div className="container">
        <div className="row">
          <div className="md-col-12">
            <h4 className="text-center mt-5 mb-5">ALL EMPLOYEES</h4>
          </div>
        </div>
      </div>
      <DisplayEmployees />
      <CreateEmployee className="mt-5 mb-5"/>
      <hr/>
      <div className="footerSection">
        <footer>
          <p className="text-center">&copy;2023 Copyright - Terra Firma Software</p>
          <p className="text-center">Version {codeVersion.version}</p>
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
