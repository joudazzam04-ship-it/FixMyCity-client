import React from "react";


function AssignForm({
  departments,
  employees,

  departmentId,
  employeeId,
  priority,
  adminNote,

  onDepartmentChange,

  setEmployeeId,
  setPriority,
  setAdminNote,

  onAssign,
  onReject
}) {


  return (

    <section className="admin-card">

      <div className="admin-card-header">
        <h2>Assign Report</h2>
      </div>


      <div className="assign-form-grid">


      
        <div className="assign-field">

          <label htmlFor="department">
            Department
          </label>

          <select
            id="department"
            value={departmentId}
            onChange={onDepartmentChange}
          >

            <option value="">
              Select department or service
            </option>


            {departments.map((item) => (

              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>

            ))}

          </select>

        </div>


        <div className="assign-field">

          <label htmlFor="employee">
            Assign to Employee *
          </label>


          <select
            id="employee"
            value={employeeId}

            onChange={(event) =>
              setEmployeeId(event.target.value)
            }
//Disable this dropdown if no department has been selected yet.
            disabled={departmentId === ""}
          >

{ /* employee dropdown list */ }
            <option value="">

              {departmentId === ""
                ? "Select a department first"
                : "Select employee"}

            </option>


            {employees.map((employee) => (

              <option
                key={employee.id}
                value={employee.id}
              >
                {employee.name}
              </option>

            ))}

          </select>


          {departmentId !== "" && 
            employees.length === 0 && (

              <p className="assign-warning">
                No employees in this department.
              </p>

            )}

        </div>


        {/* Priority */}
        <div className="assign-field">

          <label htmlFor="priority">
            Priority *
          </label>


          <select
            id="priority"
            value={priority}

            onChange={(event) =>
              setPriority(event.target.value)
            }
          >

            <option value="">
              Select priority
            </option>

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Low">
              Low
            </option>

          </select>

        </div>


        {/* Admin Note */}
        <div className="assign-field assign-field-wide">

          <label htmlFor="admin-note">
            Admin Note (Optional)
          </label>


          <textarea
            id="admin-note"

            maxLength={500}

            placeholder="Add a note about this assignment..."

            value={adminNote}

            onChange={(event) =>
              setAdminNote(event.target.value)
            }
          />


          <span className="assign-counter">
            {adminNote.length} / 500
          </span>

        </div>

      </div>


      {/* Buttons */}
      <div className="assign-actions">


        <button
          type="button"
          className="assign-reject-button"
          onClick={onReject}
        >
          Reject Report
        </button>


        <button
          type="button"
          className="assign-submit-button"
          onClick={onAssign}
        >
          Assign Report
        </button>


      </div>

    </section>

  );
}


export default AssignForm;