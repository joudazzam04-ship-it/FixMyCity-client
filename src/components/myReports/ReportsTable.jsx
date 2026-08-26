import ReportRow from "./ReportRow";

import pothole from "../../assets/pothole.jpg";
import streetlight from "../../assets/streetlight.jpg";
import garbage from "../../assets/garbage.jpg";

import "../../css/myReport/MyReport.css";

function ReportsTable() {
  return (
    <section className="reports-table">

      <div className="reports-table-header">
        <div>Issue</div>
        <div>Status</div>
        <div>Reported On</div>
        <div>Action</div>
      </div>

      <ReportRow
      id={1}
        image={pothole}
        title="Pothole on Main St."
        location="Khalda, Amman"
        status="In Progress"
        date="May 18, 2026"
      />

      <ReportRow
            id={2}

        image={streetlight}
        title="Broken Streetlight"
        location="Shmeisani, Amman"
        status="New"
        date="May 17, 2026"
      />

      <ReportRow
            id={3}

        image={garbage}
        title="Overflowing Trash Bin"
        location="Abdoun, Amman"
        status="Resolved"
        date="May 16, 2026"
      />

    </section>
  );
}

export default ReportsTable;