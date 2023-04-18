import React, { Fragment, useState } from "react";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, surname, age, address, department };
      const response = await fetch("http://localhost:5000/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response.status);
      console.log(response);
      if (response.status === 200) {
        alert("Employee added successfully!");
      }
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h3 className="text-center text-primary">
        Terra-Firma Employee Management App
      </h3>
      <hr />
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
        >
          Create Employee
        </button>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-system-grey">
                  CREATE EMPLOYEE
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmitForm}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputSurname">Surname</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputSurname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputAge">Age</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAge"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputDepartment">Description</label>
                      <input
                        rows="5"
                        type="text"
                        className="form-control"
                        id="inputDepartment"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputAddress">Address</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mb-5 mt-5 text-center"
                  >
                    SAVE
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateEmployee;
