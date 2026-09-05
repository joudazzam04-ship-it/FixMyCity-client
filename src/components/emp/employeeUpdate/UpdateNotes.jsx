import React, { useState } from "react";

function UpdateNotes({ report, user, onUpdated }) {
  const [note, setNote] = useState("");

  const notes = report.notes || [];

  const handleSaveNote = async () => {
    if (note.trim() === "") {
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/reports/${report.id}/notes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-role": user.role,
        },
        body: JSON.stringify({
          message: note,
          employee_id: user.id,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    setNote("");
    onUpdated();
  };

  function formatDateTime(value) {
    if (!value) return "";
    const date = new Date(value);
    return (
      date.toLocaleDateString("en-US", {
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

  return (
    <div className="update-notes-card">
      <h2>Notes / Update Details</h2>

      <p>
        Add information about the work completed or current progress.
      </p>

      <textarea
        placeholder="Write an update for this report..."
        value={note}
        onChange={(event) => setNote(event.target.value)}
      ></textarea>

      <button
        type="button"
        className="save-note-button"
        onClick={handleSaveNote}
      >
        Save Note
      </button>

      {notes.length > 0 && (
        <div className="saved-notes-list">
          <h4>Your previous notes</h4>

          {notes.map((item) => (
            <div className="saved-note-item" key={item.id}>
              <p>{item.message}</p>
              <span>
                {item.employee_name} • {formatDateTime(item.created_at)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpdateNotes;