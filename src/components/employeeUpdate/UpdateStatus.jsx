import React, { useState } from "react";

function UpdateStatus({ report, setReports }) {
const [status, setStatus] = useState(report.status);

  const statusSteps = [
    "Assigned",
    "In Progress",
    "Under Review",
    "Resolved"
  ];

  const currentStep = statusSteps.indexOf(status);

  function handleStatusChange(event) {
    setStatus(event.target.value);
  }

function handleUpdateStatus() {
  setReports((currentReports) =>
    currentReports.map((item) =>
      item.id === report.id
        ? { ...item, status: status }
        : item
    )
  );

  alert("Status updated successfully");
}

  return (
    <div className="update-status-card">
      <h2>Update Status</h2>

      <label htmlFor="report-status">
        Report Status
      </label>

      <select
        id="report-status"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="Assigned">Assigned</option>
        <option value="In Progress">In Progress</option>
        <option value="Under Review">Under Review</option>
        <option value="Resolved">Resolved</option>
      </select>

      <div className="status-timeline">

        <div
          className={`timeline-item ${
            currentStep > 0
              ? "completed"
              : currentStep === 0
              ? "active"
              : ""
          }`}
        >
          <span className="timeline-circle"></span>

          <div>
            <h4>Report Received</h4>
            <p>Report was assigned to your department.</p>
          </div>
        </div>

        <div
          className={`timeline-item ${
            currentStep > 1
              ? "completed"
              : currentStep === 1
              ? "active"
              : ""
          }`}
        >
          <span className="timeline-circle"></span>

          <div>
            <h4>Work In Progress</h4>
            <p>The issue is currently being handled.</p>
          </div>
        </div>

        <div
          className={`timeline-item ${
            currentStep > 2
              ? "completed"
              : currentStep === 2
              ? "active"
              : ""
          }`}
        >
          <span className="timeline-circle"></span>

          <div>
            <h4>Under Review</h4>
            <p>Work will be checked before completion.</p>
          </div>
        </div>

        <div
          className={`timeline-item ${
            currentStep === 3 ? "completed" : ""
          }`}
        >
          <span className="timeline-circle"></span>

          <div>
            <h4>Resolved</h4>
            <p>The issue has been completed.</p>
          </div>
        </div>

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