import React from "react";

function UsersTable({ users, onToggleStatus }) {

  function formatDate(value) {
    if (!value) return "—";

    return new Date(value).toLocaleDateString();
  }

  if (users.length === 0) {
    return (
      <section className="admin-card">
        <p className="admin-empty-message">
          No users match your filters.
        </p>
      </section>
    );
  }

  return (
    <section className="admin-card">

      <table className="admin-table">

        <thead>
          <tr>
            <th>User</th>
            <th>User Type</th>
            <th>Department</th>
            <th>Email / Phone</th>
            <th>Status</th>
            <th>Joined On</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((item) => (
            <tr key={item.id}>

              <td>{item.name}</td>

              <td>
                <span className={`user-role-badge ${item.role}`}>
                  {item.role}
                </span>
              </td>

              <td>{item.department || "—"}</td>

              <td>
                <div className="user-contact">
                  <span>{item.email}</span>
                  <span>{item.phone}</span>
                </div>
              </td>

              <td>
                <span
                  className={`user-status-badge ${
                    (item.status || "").toLowerCase()
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td>{formatDate(item.joined_on)}</td>

              <td>
                <button
                  type="button"
                  className="admin-table-button"
                  onClick={() => onToggleStatus(item)}
                >
                  {item.status === "Active"
                    ? "Deactivate"
                    : "Activate"}
                </button>
              </td>

            </tr>
          ))}

        </tbody>
      </table>

    </section>
  );
}

export default UsersTable;