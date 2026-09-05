import React, { useState } from "react";

function UpdateStatus({ report, user, onUpdated }) {
  const [status, setStatus] = useState(report.status);

  const statusSteps = [
    { name: "Pending Review", description: "Report was submitted by the citizen." },
    { name: "Assigned", description: "Report was assigned to your department." },
    { name: "In Progress", description: "The issue is currently being handled." },
    { name: "Under Review", description: "Work will be checked before completion." },
    { name: "Resolved", description: "The issue has been completed." }
  ];

  // The backend only accepts these four.
  const selectableStatuses = [
    "Assigned",
    "In Progress",
    "Under Review",
    "Resolved"
  ];

  const currentStep = statusSteps.findIndex((step) => step.name === status);

  const handleUpdateStatus = async () => {
    if (status === report.status) {
      alert("Status is already " + status);
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/reports/${report.id}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-role": user.role,
        },
        body: JSON.stringify({
          status: status,
          changed_by: user.id,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Status updated successfully");
    onUpdated();
  };

  return (
    <div className="update-status-card">
      <h2>Update Status</h2>

      <label htmlFor="report-status">Report Status</label>

      <select
        id="report-status"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        {selectableStatuses.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <div className="status-timeline">
        {statusSteps.map((step, index) => (
          <div
            key={step.name}
            className={`timeline-item ${
              index < currentStep
                ? "completed"
                : index === currentStep
                ? "active"
                : ""
            }`}
          >
            <span className="timeline-circle"></span>

            <div>
              <h4>{step.name}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="update-status-button"
        onClick={handleUpdateStatus}
      >
        Update Status
      </button>
    </div>
  );
}

export default UpdateStatus;