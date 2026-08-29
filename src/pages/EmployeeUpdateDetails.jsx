import React from "react";
import { useParams } from "react-router-dom";

import EmployeeSidebar from "../components/employeeDashboard/EmployeeSidebar";
import UpdateReportHeader from "../components/employeeUpdate/UpdateReportHeader";
import UpdateStatus from "../components/employeeUpdate/UpdateStatus";
import ProgressUpload from "../components/employeeUpdate/ProgressUpload";
import UpdateNotes from "../components/employeeUpdate/UpdateNotes";
import UpdateHistory from "../components/employeeUpdate/UpdateHistory";

import "../css/employeeUpdate/EmployeeUpdateDetails.css";

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
            <ProgressUpload />
            <UpdateNotes />
          </div>

        </div>

        <UpdateHistory />

      </main>
    </div>
  );
}

export default EmployeeUpdateDetails;