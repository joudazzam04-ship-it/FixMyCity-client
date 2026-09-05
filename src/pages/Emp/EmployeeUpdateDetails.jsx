import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EmployeeSidebar from "../../components/emp/employeeDashboard/EmployeeSidebar";
import UpdateReportHeader from "../../components/emp/employeeUpdate/UpdateReportHeader";
import UpdateStatus from "../../components/emp/employeeUpdate/UpdateStatus";
import ProgressUpload from "../../components/emp/employeeUpdate/ProgressUpload";
import UpdateNotes from "../../components/emp/employeeUpdate/UpdateNotes";
import UpdateHistory from "../../components/emp/employeeUpdate/UpdateHistory";

import "../../css/employeeUpdate/EmployeeUpdateDetails.css";

function EmployeeUpdateDetails({ currentUser, setCurrentUser }) {
  const { id } = useParams();

  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, [id]);

  const fetchReport = async () => {
    const res = await fetch(`http://localhost:5000/api/reports/${id}`);
    const data = await res.json();

    if (res.ok) {
      setReport(data);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="employee-update-details-layout">
        <EmployeeSidebar currentUser={user} setCurrentUser={setCurrentUser} />
        <main className="employee-update-details-content">
          <h2>Loading report...</h2>
        </main>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="employee-update-details-layout">
        <EmployeeSidebar currentUser={user} setCurrentUser={setCurrentUser} />
        <main className="employee-update-details-content">
          <h2>Report not found</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="employee-update-details-layout">
      <EmployeeSidebar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="employee-update-details-content">

        <div className="update-details-heading">
          <h1>Update Report</h1>
          <p>Updates &gt; Report Details</p>
        </div>

        <UpdateReportHeader report={report} />

        <div className="update-details-main">

          <UpdateStatus
            report={report}
            user={user}
            onUpdated={fetchReport}
          />

                <div className="update-details-right">
            <ProgressUpload
              report={report}
              user={user}
              onUpdated={fetchReport}
            />

            <UpdateNotes
              report={report}
              user={user}
              onUpdated={fetchReport}
            />
          </div>

        </div>

<UpdateHistory history={report.history} notes={report.notes} />
      </main>
    </div>
  );
}

export default EmployeeUpdateDetails;