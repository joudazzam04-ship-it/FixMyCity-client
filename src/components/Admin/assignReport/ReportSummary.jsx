import React from "react";
import { FiImage } from "react-icons/fi";


function ReportSummary({ report }) {

  function formatDate(value) {

    if (!value) {
      return "—";
    }

    return new Date(value).toLocaleDateString();
  }


  return (

    <section className="admin-card">

      <div className="admin-card-header">
        <h2>Report Summary</h2>
      </div>


      <div className="assign-summary-top">

        {report.image ? (

          <img
            src={report.image}
            alt={report.title}
            className="assign-report-image"
          />

        ) : (

          <div className="assign-report-image assign-report-image-empty">
            <FiImage />
          </div>

        )}


        <div className="assign-summary-content">

          <h3 className="assign-report-title">
            {report.title}
          </h3>


          <div className="assign-summary-grid">

            <div>
              <span className="assign-label">
                Category
              </span>

              <p>
                {report.category || "—"}
              </p>
            </div>


            <div>
              <span className="assign-label">
                Location
              </span>

              <p>
                {report.location}
              </p>
            </div>


            <div>
              <span className="assign-label">
                Date Reported
              </span>

              <p>
                {formatDate(report.reported_date)}
              </p>
            </div>


            <div>

              <span className="assign-label">
                Status
              </span>

              <p>

                <span
                  className={`admin-status-badge ${(report.status || "")
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {report.status}
                </span>

              </p>

            </div>


            <div>
              <span className="assign-label">
                Reported By
              </span>

              <p>
                {report.reported_by_name || "—"}
              </p>
            </div>


            <div>
              <span className="assign-label">
                Current Assignee
              </span>

              <p>
                {report.assigned_to_name || "Unassigned"}
              </p>
            </div>

          </div>

        </div>

      </div>


      <div className="assign-description">

        <span className="assign-label">
          Description
        </span>

        <p>
          {report.description}
        </p>

      </div>

    </section>

  );
}


export default ReportSummary;