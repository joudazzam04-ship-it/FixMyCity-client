import React from "react";

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ReportUpdates({ updates = [], images = [] }) {
  return (
    <section className="report-updates-section">
      <h2>Updates from the Department</h2>

      {updates.length === 0 && images.length === 0 && (
        <p className="no-updates-message">
          No updates from the department yet. You'll see progress notes and
          photos here once a team member starts working on your report.
        </p>
      )}

      <div className="report-updates-container">
        {updates.map((update) => (
          <div className="report-update-card" key={update.id}>
            <div className="report-update-header">
              <h3>
                {update.employee_name || "Department staff"}
                {update.department ? ` — ${update.department}` : ""}
              </h3>
              <span>{formatDate(update.created_at)}</span>
            </div>
            <p>{update.message}</p>
          </div>
        ))}
      </div>

      {images.length > 0 && (
        <div className="report-progress-images">
          <h3>Progress Photos from the Team</h3>
          <div className="report-progress-images-container">
            {images.map((image, index) => (
              <img
                key={image.id || index}
                src={image.image_path || image}
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