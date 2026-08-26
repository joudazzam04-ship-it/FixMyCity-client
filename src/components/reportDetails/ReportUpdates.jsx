import React from "react";

function ReportUpdates({ updates }) {
  return (
    <section className="report-updates-section">
      <h2>Updates</h2>

      <div className="report-updates-container">

        {updates.map((update, index) => (
          <div
            className="report-update-card"
            key={index}
          >
            <div className="report-update-header">
              <h3>{update.department}</h3>
              <span>{update.date}</span>
            </div>

            <p>{update.message}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ReportUpdates;