import React from "react";
import { useParams, Link } from "react-router-dom";
import EmployeeSidebar from "../../components/emp/employeeDashboard/EmployeeSidebar";
import UpdateReportHeader from "../../components/emp/employeeUpdate/UpdateReportHeader";
import UpdateStatus from "../../components/emp/employeeUpdate/UpdateStatus";
import ProgressUpload from "../../components/emp/employeeUpdate/ProgressUpload";
import UpdateNotes from "../../components/emp/employeeUpdate/UpdateNotes";
import UpdateHistory from "../../components/emp/employeeUpdate/UpdateHistory";

import "../../css/employeeUpdate/EmployeeUpdateDetails.css";

function EmployeeUpdateDetails({ reports, setReports }) {
  const { id } = useParams();

  const report = reports.find(
    (item) => item.id === Number(id)
  );

  if (!report) {
    return (
      <div className="employee-update-details-layout">
        <EmployeeSidebar />

        <main className="employee-update-details-content">
          <h2>Report not found</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="employee-update-details-layout">
      <EmployeeSidebar />

      <main className="employee-update-details-content">

        <div className="update-details-heading">
          <h1>Update Report</h1>
          <p>Updates &gt; Report Details</p>
        </div>

<UpdateReportHeader report={report} />


        <div className="update-details-main">

          <UpdateStatus
            report={report}
            setReports={setReports}
          />

          <div className="update-details-right">
<ProgressUpload
  report={report}
  setReports={setReports}
/>
<UpdateNotes
  report={report}
  setReports={setReports}
/>          </div>

        </div>

        <UpdateHistory />

      </main>
    </div>
  );
}

export default EmployeeUpdateDetails;