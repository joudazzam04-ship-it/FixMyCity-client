import React, { useEffect, useState } from "react";

function CreateEmployeeForm({ currentUser, onCreated, onCancel }) {
  const [departments, setDepartments] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newPassword, setNewPassword] = useState("emp123");
  const [newDepartmentId, setNewDepartmentId] = useState("");

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/departments`
    );

    const data = await res.json();
    setDepartments(data);
  };


  //tirm: remove extra spaces  
  const handleCreateEmployee = async () => {
    if (
      newName.trim() === "" ||
      newEmail.trim() === "" ||
      newPassword === "" ||
      newDepartmentId === ""
    ) {
      alert("Please fill in name, email, password and department.");
      return;
    }


    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/users/employees`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-role": currentUser.role,
        },
        body: JSON.stringify({
          name: newName.trim(),
          email: newEmail.trim(),
          password: newPassword,
          phone: newPhone.trim(),
          department_id: Number(newDepartmentId),
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Employee account created successfully");

    onCreated();
    onCancel();
  };

  return (
    <section className="admin-card">
      <div className="admin-card-header">
        <h2>New Employee Account</h2>
      </div>

      <div className="create-employee-grid">

        <div className="create-employee-field">
          <label>Full Name *</label>
          <input
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>

        <div className="create-employee-field">
          <label>Email *</label>
          <input
            type="email"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />
        </div>

        <div className="create-employee-field">
          <label>Phone</label>
          <input
            type="tel"
            value={newPhone}
            onChange={(event) => setNewPhone(event.target.value)}
          />
        </div>

        <div className="create-employee-field">
          <label>Department *</label>

          <select
            value={newDepartmentId}
            onChange={(event) =>
              setNewDepartmentId(event.target.value)
            }
          >
            <option value="">Select department</option>

            {/* dropdown list of departments fetched from the backend */}
            {departments.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="create-employee-field">
          <label>Temporary Password *</label>

          <input
            type="text"
            value={newPassword}
            onChange={(event) =>
              setNewPassword(event.target.value)
            }
          />
        </div>

      </div>

      <div className="create-employee-actions">
        <button
          type="button"
          className="admin-table-button"
          onClick={handleCreateEmployee}
        >
          Create Account
        </button>
      </div>
    </section>
  );
}

export default CreateEmployeeForm;