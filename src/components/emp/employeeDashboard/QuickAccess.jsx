import React from "react";
import {
  FiRefreshCw,
  FiEdit3,
  FiCheckCircle
} from "react-icons/fi";

import "../../../css/EmployeeDashboard/QuickAccess.css";

function QuickAccess() {
  return (
    <section className="quick-actions-section">
      <h2>Quick Access</h2>

      <div className="quick-action-card">
        <div className="quick-action-icon">
          <FiRefreshCw />
        </div>

        <div>
          <h3>Update Status</h3>
          <p>Update the progress of assigned reports.</p>
        </div>
      </div>

      <div className="quick-action-card">
        <div className="quick-action-icon">
          <FiEdit3 />
        </div>

        <div>
          <h3>Add Note</h3>
          <p>Add notes or comments to a report.</p>
        </div>
      </div>

      <div className="quick-action-card">
        <div className="quick-action-icon">
          <FiCheckCircle />
        </div>

        <div>
          <h3>Mark Resolved</h3>
          <p>Mark a report as resolved once the issue is fixed.</p>
        </div>
      </div>
    </section>
  );
}

export default QuickAccess;