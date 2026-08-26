import React from "react";

function StatusHistory({ history }) {
  return (
    <section className="status-history-section">
      <h2>Status History</h2>

      <div className="status-history-container">

        {history.map((item, index) => (
          <div
            className="status-history-card"
            key={index}
          >
            <h3>{item.status}</h3>
            <p>{item.date}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default StatusHistory;