import { FiMapPin } from "react-icons/fi";
import "../../css/myReport/MyReport.css";

import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";

function ReportRow({ id, image, title, location, status, date }) {
  return (
    <div className="report-row">

      <div className="report-issue">
        <img
          src={image}
          alt={title}
          className="report-row-image"
        />

        <div className="report-row-info">
          <h3>{title}</h3>

          <p>
            <FiMapPin />
            {location}
          </p>
        </div>
      </div>

      <div className="report-status">
        <span
          className={`report-status-badge ${status
            .toLowerCase()
            .replace(" ", "-")}`}  //so the status can match the css class name for styling purposes
        >
          {status}
        </span>
      </div>

      <div className="report-date">
        {date}
      </div>

<div className="report-action">
  <Link to={`/citizen/reports/${id}`} className="view-report-btn">
    View
  </Link>
</div>

    </div>
  );
}

export default ReportRow;