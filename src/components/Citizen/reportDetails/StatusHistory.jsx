import React from "react";

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function StatusHistory({ history = [] }) {
  return (
    <section className="status-history-section">
      <h2>Status History</h2>

      <div className="status-history-container">

        {history.length === 0 && (
          <p>No status changes yet.</p>
        )}

        {history.map((item) => (
          <div
            className="status-history-card"
            key={item.id}
          >
            <h3>{item.status}</h3>
            <p>{formatDate(item.changed_at)}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default StatusHistory;