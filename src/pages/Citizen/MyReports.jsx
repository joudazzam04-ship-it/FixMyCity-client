import React, { useState, useEffect } from "react";

import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import PageTitle from "../../components/Citizen/myReports/PageTitle";
import ReportsTable from "../../components/Citizen/myReports/ReportsTable";
import Footer from "../../components/Home/homePage/Footer";

import "../../css/myReport/MyReport.css";

function MyReports({ currentUser, setCurrentUser }) {
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

  const myReports = reports
    .filter((report) => user && report.reported_by === user.id)
    .sort((a, b) => new Date(b.reported_date) - new Date(a.reported_date));

  return (
    <>
      <CitizenNavbar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="my-reports-page">
        <div className="my-reports-container">
          <PageTitle />
          <ReportsTable reports={myReports} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyReports;