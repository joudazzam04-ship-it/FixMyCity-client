import React, { useState, useEffect } from "react";

import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import DashboardStats from "../../components/Citizen/citizenDashboard/DashboardStats";
import LatestReport from "../../components/Citizen/citizenDashboard/LatestReport";
import ReportBanner from "../../components/Citizen/citizenDashboard/ReportBanner";
import Footer from "../../components/Home/homePage/Footer";

import "../../css/citizenDashboard/CitizenDashboard.css";

function CitizenDashboard({ currentUser, setCurrentUser }) {
  const [reports, setReports] = useState([]);

  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const res = await fetch("http://localhost:5000/api/reports");
    const data = await res.json();
    setReports(data);
  };

  const myReports = reports.filter(
    (report) => user && report.reported_by === user.id
  );

  const firstName = user ? user.name.split(" ")[0] : "there";

  return (
    <>
      <CitizenNavbar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="citizen-dashboard">
        <div className="dashboard-container">

          <div className="dashboard-welcome">
            <h1>Welcome, {firstName}!</h1>
            <p>Here's an overview of the issues you've reported.</p>
          </div>

          <DashboardStats reports={myReports} />

          <ReportBanner />

          <LatestReport reports={myReports} />

        </div>
      </main>

      <Footer />
    </>
  );
}

export default CitizenDashboard;