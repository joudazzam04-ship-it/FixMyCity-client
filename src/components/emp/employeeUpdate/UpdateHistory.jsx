import React from "react";

function UpdateHistory({ history = [], notes = [] }) {
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

  // Merge status changes and notes into one timeline, oldest first.
  const items = [
    ...history.map((item) => ({
      key: "status-" + item.id,
      title: "Status changed to " + item.status,
      description: "The report status was updated.",
      when: item.changed_at,
    })),
    ...notes.map((item) => ({
      key: "note-" + item.id,
      title: "Note added" + (item.employee_name ? " by " + item.employee_name : ""),
      description: item.message,
      when: item.created_at,
    })),
  ].sort((a, b) => new Date(a.when) - new Date(b.when));

  return (
    <div className="update-history-card">

      <h2>Update History</h2>

      {items.length === 0 && (
        <p>No updates yet for this report.</p>
      )}

      <div className="update-history-list">

        {items.map((item) => (
          <div className="update-history-item" key={item.key}>

            <div className="history-dot"></div>

            <div className="history-content">

              <h4>{item.title}</h4>

              <p>{item.description}</p>

              <span>{formatDateTime(item.when)}</span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default UpdateHistory;