import React, { useState } from "react";

function UpdateNotes() {
  const [note, setNote] = useState("");

  function handleSaveNote() {
    console.log("Saved note:", note);
    setNote("");
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
        className="save-note-button"
        onClick={handleSaveNote}
      >
        Save Note
      </button>

    </div>
  );
}

export default UpdateNotes;