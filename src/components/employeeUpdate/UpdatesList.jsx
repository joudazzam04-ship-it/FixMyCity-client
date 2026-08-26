import React from "react";

import UpdateReportCard from "./UpdateReportCard";

import pothole from "../../assets/pothole.jpg";
import streetlight from "../../assets/streetlight.jpg";
import waterLeak from "../../assets/waterLeak.jpg";

function UpdatesList() {
  return (
    <section className="updates-list-section">

      <UpdateReportCard
        id={1}
        image={pothole}
        title="Pothole on Main Street"
        department="Road Maintenance"
        location="Main St, Downtown"
        assignedDate="May 12, 2026"
        status="In Progress"
      />

      <UpdateReportCard
        id={2}
        image={streetlight}
        title="Broken Streetlight"
        department="Street Lighting"
        location="Oak Ave, Block 12"
        assignedDate="May 10, 2026"
        status="Assigned"
      />

      <UpdateReportCard
        id={3}
        image={waterLeak}
        title="Water Leak Near Sidewalk"
        department="Water & Sewer"
        location="Pine Rd, Near #45"
        assignedDate="May 9, 2026"
        status="In Progress"
      />

    </section>
  );
}

export default UpdatesList;