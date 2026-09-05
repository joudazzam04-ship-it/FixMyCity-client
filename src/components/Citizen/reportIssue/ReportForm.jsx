import React from "react";
import { useNavigate } from "react-router-dom";

import "../../../css/reportIssue/ReportIssue.css";

function ReportForm({
  title, setTitle,
  category, setCategory,
  categories = [],
  description, setDescription,
  noticedDate, setNoticedDate,
  onSubmit,
  submitting
}) {
  const navigate = useNavigate();

  return (
    <div className="report-form-left">

      <div className="report-field">
        <label>Issue Title *</label>
        <input
          type="text"
          placeholder="e.g., Large pothole on Main Street"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="report-field">
        <label>Category *</label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="report-field">
        <label>Description *</label>
        <textarea
          rows="5"
          placeholder="Please describe the issue in detail..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>

      <div className="report-field report-date-field">
        <label>When did you notice this issue?</label>
        <input
          type="date"
          value={noticedDate}
          onChange={(event) => setNoticedDate(event.target.value)}
        />
      </div>

      <div className="report-form-buttons">
        <button
          type="button"
          className="submit-report-btn"
          onClick={onSubmit}
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Report"}
        </button>

        <button
          type="button"
          className="cancel-report-btn"
          onClick={() => navigate("/citizen/reports")}
        >
          Cancel
        </button>
      </div>

    </div>
  );
}

export default ReportForm;