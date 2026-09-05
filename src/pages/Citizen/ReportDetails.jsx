import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import BackButton from "../../components/Citizen/reportDetails/BackButton";
import ReportInfo from "../../components/Citizen/reportDetails/ReportInfo";
import StatusHistory from "../../components/Citizen/reportDetails/StatusHistory";
import ReportUpdates from "../../components/Citizen/reportDetails/ReportUpdates";
import Footer from "../../components/Home/homePage/Footer";

import "../../css/reportDetails/ReportDetails.css";

function ReportDetails({ currentUser, setCurrentUser }) {
  const { id } = useParams();

  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, [id]);

  const fetchReport = async () => {
    setLoading(true);

    const res = await fetch(`http://localhost:5000/api/reports/${id}`);
    const data = await res.json();

    if (res.ok) {
      setReport(data);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <>
        <CitizenNavbar currentUser={user} setCurrentUser={setCurrentUser} />
        <main className="report-details-page">
          <div className="report-details-container">
            <p>Loading report...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!report) {
    return (
      <>
        <CitizenNavbar currentUser={user} setCurrentUser={setCurrentUser} />
        <main className="report-details-page">
          <div className="report-details-container">
            <BackButton />
            <h2>Report not found</h2>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CitizenNavbar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="report-details-page">
        <div className="report-details-container">

          <BackButton />

          <h1>Report Details</h1>

          <ReportInfo report={report} />

          <StatusHistory history={report.history} />

          <ReportUpdates
            updates={report.notes}
            images={report.progressImages}
          />

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ReportDetails;