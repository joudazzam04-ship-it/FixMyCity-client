import React, { useState } from "react";

function UpdateStatus({ report, setReports }) {
  const [status, setStatus] = useState(report.status);

  const statusSteps = [
    { name: "Reported", description: "Report was submitted by the citizen." },
    { name: "Assigned", description: "Report was assigned to your department." },
    { name: "In Progress", description: "The issue is currently being handled." },
    { name: "Under Review", description: "Work will be checked before completion." },
    { name: "Resolved", description: "The issue has been completed." }
  ];

  const currentStep = statusSteps.findIndex((step) => step.name === status);

  function handleStatusChange(event) {
    setStatus(event.target.value);
  }

  function handleUpdateStatus() {
    if (status === report.status) {
      alert("Status is already " + status);
      return;
    }

    const newHistoryEntry = {
      status: status,
      date: new Date().toLocaleDateString()
    };

    setReports((currentReports) =>
      currentReports.map((item) =>
        item.id === report.id
          ? {
              ...item,
              status: status,
              history: [...item.history, newHistoryEntry]
            }
          : item
      )
    );

    alert("Status updated successfully");
  }

  return (
    <div className="update-status-card">
      <h2>Update Status</h2>

      <label htmlFor="report-status">Report Status</label>

      <select
        id="report-status"
        value={status}
        onChange={handleStatusChange}
      >
        {statusSteps.map((step) => (
          <option key={step.name} value={step.name}>
            {step.name}
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