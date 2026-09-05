import React from "react";

function ReportActivity({ history = [], notes = [], images = [] }) {
    function formatDateTime(value) {
    if (!value) return "";
    const date = new Date(value);
    return (
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }) +
      " • " +
      date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    );
  }

  const items = [
    ...history.map((item) => ({
      key: "status-" + item.id,
      title: "Status changed to " + item.status,
      description: "",
      when: item.changed_at,
    })),
    ...notes.map((item) => ({
      key: "note-" + item.id,
      title:
        "Note added" + (item.employee_name ? " by " + item.employee_name : ""),
      description: item.message,
      when: item.created_at,
    })),
  ].sort((a, b) => new Date(a.when) - new Date(b.when));

  return (
    <section className="admin-card">
      <div className="admin-card-header">
        <h2>Activity & Notes</h2>
      </div>

      {items.length === 0 && (
        <p className="admin-empty-message">No activity yet for this report.</p>
      )}

      {items.map((item) => (
        <div className="status-summary-row" key={item.key}>
          <div>
            <strong>{item.title}</strong>
            {item.description !== "" && <p>{item.description}</p>}
          </div>
          <span>{formatDateTime(item.when)}</span>
        </div>
      ))}

               {images.length > 0 && (
        <div className="report-progress-images">
          <h3>Progress Photos</h3>
          <div className="report-progress-images-container">
            {images.map((image, index) => (
              <img
                key={image.id || index}
                src={image.image_path}
                alt={`Progress ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
      
    </section>

    
  );
}

export default ReportActivity;