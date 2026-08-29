import React, { useState } from "react";

function UpdateNotes({ report, setReports }) {
  const [note, setNote] = useState("");

  function handleSaveNote() {
    if (note.trim() === "") {
      return;
    }

    const newNote = {
      id: Date.now(),
      department: report.department,
      message: note,
      date: new Date().toLocaleDateString()
    };

    setReports((currentReports) =>
      currentReports.map((item) =>
        item.id === report.id
          ? {
              ...item,
              notes: [...item.notes, newNote]
            }
          : item
      )
    );

    setNote("");

    alert("Note saved successfully");
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
    </div>
  );
}

export default UpdateNotes;