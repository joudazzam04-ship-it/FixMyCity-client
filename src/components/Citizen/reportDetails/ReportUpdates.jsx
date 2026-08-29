import React from "react";

function ReportUpdates({ updates, images }) {
  return (
    <section className="report-updates-section">
      <h2>Updates</h2>

      {updates.length === 0 && images.length === 0 && (
        <p className="no-updates-message">
          No updates from the department yet.
        </p>
      )}

      <div className="report-updates-container">
        {updates.map((update, index) => (
          <div className="report-update-card" key={index}>
            <div className="report-update-header">
              <h3>{update.department}</h3>
              <span>{update.date}</span>
            </div>
            <p>{update.message}</p>
          </div>
        ))}
      </div>

      {images.length > 0 && (
        <div className="report-progress-images">
          <h3>Progress Photos</h3>
          <div className="report-progress-images-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Progress ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ReportUpdates;