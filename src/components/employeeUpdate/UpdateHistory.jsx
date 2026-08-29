import React from "react";

function UpdateHistory() {

  const updates = [
    {
      id: 1,
      title: "Report Assigned",
      description: "Report was assigned to Road Maintenance.",
      date: "May 17, 2026",
      time: "10:30 AM"
    },
    {
      id: 2,
      title: "Status Changed to In Progress",
      description: "Maintenance work has started.",
      date: "May 18, 2026",
      time: "9:15 AM"
    },
    {
      id: 3,
      title: "Progress Note Added",
      description: "The damaged section has been inspected.",
      date: "May 18, 2026",
      time: "1:45 PM"
    }
  ];

  return (
    <div className="update-history-card">

      <h2>Update History</h2>

      <div className="update-history-list">

        {updates.map((update) => (
          <div
            className="update-history-item"
            key={update.id}
          >

            <div className="history-dot"></div>

            <div className="history-content">

              <h4>{update.title}</h4>

              <p>
                {update.description}
              </p>

              <span>
                {update.date} • {update.time}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default UpdateHistory;