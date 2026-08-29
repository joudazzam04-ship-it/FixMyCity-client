import React from "react";
import UpdateReportCard from "./UpdateReportCard";

import streetlight from "../../../assets/streetlight.jpg";
import waterLeak from "../../../assets/waterLeak.jpg";
import pothole from "../../../assets/pothole.jpg";

function UpdatesList({ reports }) {
  const images = {
    1: pothole,
    2: streetlight,
    3: waterLeak
  };

  return (
    <section className="updates-list-section">
      {reports.map((report) => (
        <UpdateReportCard
          key={report.id}
          id={report.id}
          image={images[report.id]}
          title={report.title}
          department={report.department}
          location={report.location}
          assignedDate={report.assignedDate}
          status={report.status}
        />
      ))}
    </section>
  );
}

export default UpdatesList;