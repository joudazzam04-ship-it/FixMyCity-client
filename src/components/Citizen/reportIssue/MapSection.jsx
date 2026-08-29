import React from "react";
import { FiMapPin } from "react-icons/fi";

import "../../../css/reportIssue/ReportIssue.css";


function MapSection() {
  return (
    <div className="report-field">
      <label>Pin Location on Map (optional)</label>

      <div className="report-map">
        <FiMapPin />
      </div>

      <p className="report-map-help">
        You can search for a location above first.
      </p>
    </div>
  );
}

export default MapSection;