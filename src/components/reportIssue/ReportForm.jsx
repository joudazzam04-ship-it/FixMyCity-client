import React from "react";
import { FiMapPin } from "react-icons/fi";

import "../../css/reportIssue/ReportIssue.css";

function ReportForm() {
  return (
    <div className="report-form-left">

      <div className="report-field">
        <label>Issue Title *</label>

        <input
          type="text"
          placeholder="e.g., Large pothole on Main Street"
        />
      </div>

      <div className="report-field">
        <label>Category *</label>

        <select>
          <option value="">Select a category</option>
          <option>Road Damage</option>
          <option>Streetlight</option>
          <option>Garbage</option>
          <option>Sidewalk</option>
          <option>Water Leak</option>
        </select>
      </div>

      <div className="report-field">
        <label>Location *</label>

        <div className="report-location-input">
          <FiMapPin />

          <input
            type="text"
            placeholder="Search or enter location"
          />
        </div>
      </div>

      <div className="report-field">
        <label>Description *</label>

        <textarea
          rows="5"
          placeholder="Please describe the issue in detail..."
        ></textarea>
      </div>

      <div className="report-field report-date-field">
        <label>When did you notice this issue?</label>

        <input type="date" />
      </div>

      <div className="report-form-buttons">
        <button className="submit-report-btn">
          Submit Report
        </button>

        <button className="cancel-report-btn">
          Cancel
        </button>
      </div>

    </div>
  );
}

export default ReportForm;