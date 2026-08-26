import React from "react";
import { useParams } from "react-router-dom";

import CitizenNavbar from "../components/citizenDashboard/CitizenNavbar";
import Footer from "../components/homePage/Footer";

import BackButton from "../components/reportDetails/BackButton";
import ReportInfo from "../components/reportDetails/ReportInfo";
import StatusHistory from "../components/reportDetails/StatusHistory";
import ReportUpdates from "../components/reportDetails/ReportUpdates";

import pothole from "../assets/pothole.jpg";
import streetlight from "../assets/streetlight.jpg";
import garbage from "../assets/garbage.jpg";

import "../css/reportDetails/ReportDetails.css";

function ReportDetails() {
  const { id } = useParams();

  const reports = [
    {
      id: 1,
      title: "Pothole on Main St.",
      category: "Road Damage",
      location: "Khalda, Amman",
      dateReported: "May 18, 2026",
      description: "Large pothole causing problems for cars.",
      status: "In Progress",
      lastUpdated: "May 20, 2026",
      image: pothole,

      history: [
        {
          status: "Reported",
          date: "May 18, 2026",
        },
        {
          status: "In Progress",
          date: "May 20, 2026",
        },
        {
          status: "Resolved",
          date: "-",
        },
      ],

      updates: [
        {
          department: "Public Works Department",
          date: "May 20, 2026",
          message: "Our team has been assigned to this issue.",
        },
      ],
    },

    {
      id: 2,
      title: "Broken Streetlight",
      category: "Streetlight",
      location: "Shmeisani, Amman",
      dateReported: "May 17, 2026",
      description: "Streetlight is not working during the night.",
      status: "New",
      lastUpdated: "May 17, 2026",
      image: streetlight,

      history: [
        {
          status: "Reported",
          date: "May 17, 2026",
        },
        {
          status: "In Progress",
          date: "-",
        },
        {
          status: "Resolved",
          date: "-",
        },
      ],

      updates: [],
    },

    {
      id: 3,
      title: "Overflowing Trash Bin",
      category: "Garbage",
      location: "Abdoun, Amman",
      dateReported: "May 16, 2026",
      description: "Trash bin is overflowing and needs to be emptied.",
      status: "Resolved",
      lastUpdated: "May 18, 2026",
      image: garbage,

      history: [
        {
          status: "Reported",
          date: "May 16, 2026",
        },
        {
          status: "In Progress",
          date: "May 17, 2026",
        },
        {
          status: "Resolved",
          date: "May 18, 2026",
        },
      ],

      updates: [
        {
          department: "Waste Management Department",
          date: "May 17, 2026",
          message: "The issue has been assigned to the waste collection team.",
        },
        {
          department: "Waste Management Department",
          date: "May 18, 2026",
          message: "The trash bin has been emptied and the issue was resolved.",
        },
      ],
    },
  ];

  const report = reports.find(
    (item) => item.id === Number(id)
  );

  if (!report) {
    return (
      <>
        <CitizenNavbar />

        <main className="report-details-page">
          <div className="report-details-container">
            <BackButton />
            <h1>Report not found</h1>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <CitizenNavbar />

      <main className="report-details-page">
        <div className="report-details-container">
          <BackButton />

          <h1 className="report-details-title">
            Report Details
          </h1>

          <ReportInfo report={report} />

          <StatusHistory history={report.history} />

          <ReportUpdates updates={report.updates} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ReportDetails;