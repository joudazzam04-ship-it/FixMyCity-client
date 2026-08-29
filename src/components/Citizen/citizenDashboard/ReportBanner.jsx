import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

import "../../../css/citizenDashboard/ReportBanner.css";
import reportBanner from "../../../assets/reportBanner.png";

function ReportBanner() {
  return (
    <section className="report-banner">
            <div className="report-banner-image">
        <img src={reportBanner} alt="Report issue" />
      </div>
      <div className="report-banner-text">
        <h2>Help make your city better</h2>

        <p>
          Report public issues in your city and help the municipality fix them
          faster.
        </p>
      </div>

      <Link to="/citizen/report" className="report-banner-button">
        <FiPlusCircle />
        Report an Issue
      </Link>
    </section>
  );
}

export default ReportBanner;