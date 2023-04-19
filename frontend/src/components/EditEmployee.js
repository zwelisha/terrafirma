import React, { Fragment, useState } from "react";

const EditEmployee = ({ employee }) => {
  const [name, setName] = useState(employee.name);
  const [surname, setSurname] = useState(employee.surname);
  const [age, setAge] = useState(employee.age);
  const [address, setAddress] = useState(employee.address);
  const [department, setDepartment] = useState(employee.department);

  const updateEmployee = async (e) => {
    try {
      e.preventDefault();
      const body = { name, surname, age, address, department };
      const response = await fetch(
        `http://localhost:5000/employees/${employee.employee_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response.status);
      console.log(response);
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${employee.employee_id}`}
      >
        EDIT
      </button>

      <div className="modal" id={`id${employee.employee_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-system-grey">
                EDIT EMPLOYEE DETAILS
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
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
                      <label htmlFor="inputDepartment">Department</label>
                      <input
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
                        rows="5"
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={(e) => updateEmployee(e)}
              >
                SAVE
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => updateEmployee(e)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditEmployee;
