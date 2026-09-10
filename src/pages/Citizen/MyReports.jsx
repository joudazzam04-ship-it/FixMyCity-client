import React, { useState, useEffect } from "react";

import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import PageTitle from "../../components/Citizen/myReports/PageTitle";
import ReportsTable from "../../components/Citizen/myReports/ReportsTable";
import Footer from "../../components/Home/homePage/Footer";

import "../../css/myReport/MyReport.css";

function MyReports({ currentUser, setCurrentUser }) {
  const [reports, setReports] = useState([]);

  const savedUser = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const user = currentUser || savedUser;


  useEffect(() => {
    fetchReports();
  }, []);


  // Get all reports
  const fetchReports = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/reports`
    );

    const data = await res.json();

    setReports(data);
  };


  // Delete one of the citizen's reports
  const handleDeleteReport = async (report) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;


    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/reports/${report.id}`,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          "x-role": user.role,
        },

        body: JSON.stringify({
          user_id: user.id,
        }),
      }
    );


    const data = await res.json();


    if (!res.ok) {
      alert(data.message);
      return;
    }


    alert("Report deleted successfully");

    // Get the reports again after deleting
    fetchReports();
  };


  const myReports = reports
    .filter(
      (report) =>
        user && report.reported_by === user.id
    )
    .sort(
      (a, b) =>
        new Date(b.reported_date) -
        new Date(a.reported_date)
    );


  return (
    <>
      <CitizenNavbar
        currentUser={user}
        setCurrentUser={setCurrentUser}
      />

      <main className="my-reports-page">

        <div className="my-reports-container">

          <PageTitle />

          <ReportsTable
            reports={myReports}
            onDelete={handleDeleteReport}
          />

        </div>

      </main>

      <Footer />
    </>
  );
}

export default MyReports;