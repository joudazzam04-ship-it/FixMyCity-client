import React from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiCalendar,
  FiGrid
} from "react-icons/fi";

function UpdateReportCard({
  id,
  image,
  title,
  department,
  location,
  assignedDate,
  status
}) {
  return (
    <div className="update-report-card">

      <img
        src={image}
        alt={title}
        className="update-report-image"
      />

      <div className="update-report-info">

        <h3>{title}</h3>

        <p>
          <FiGrid />
          {department}
        </p>

        <p>
          <FiMapPin />
          {location}
        </p>

        <p>
          <FiCalendar />
          Assigned: {assignedDate}
        </p>

      </div>

      <div className="update-report-right">

        <span
          className={`update-report-status ${status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {status}
        </span>

        <Link
          to={`/employee/updates/${id}`}
          className="update-report-button"
        >
          Update
        </Link>

      </div>

    </div>
  );
}

export default UpdateReportCard;