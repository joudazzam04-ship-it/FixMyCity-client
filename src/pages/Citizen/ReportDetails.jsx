import React from "react";
import { useParams } from "react-router-dom";

import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import BackButton from "../../components/Citizen/reportDetails/BackButton";
import ReportInfo from "../../components/Citizen/reportDetails/ReportInfo";
import StatusHistory from "../../components/Citizen/reportDetails/StatusHistory";
import ReportUpdates from "../../components/Citizen/reportDetails/ReportUpdates";
import Footer from "../../components/Home/homePage/Footer";

import "../../css/reportDetails/ReportDetails.css";

function ReportDetails({ reports, currentUser, setCurrentUser }) {
  const { id } = useParams();

  const report = reports.find(
    (item) => item.id === Number(id)
  );

  if (!report) {
    return <h2>Report not found</h2>;
  }

  return (
    <>
  <CitizenNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

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