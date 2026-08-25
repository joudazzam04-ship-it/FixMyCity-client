import CitizenNavbar from "../components/citizenDashboard/CitizenNavbar";
import DashboardStats from "../components/citizenDashboard/DashboardStats";
import LatestReport from "../components/citizenDashboard/LatestReport";
import ReportBanner from "../components/citizenDashboard/ReportBanner";
import Footer from "../components/homePage/Footer";

import "../css/citizenDashboard/CitizenDashboard.css";

function CitizenDashboard() {
  return (
    <>
      <CitizenNavbar />

      <main className="citizen-dashboard">
        <div className="dashboard-container">

          <div className="dashboard-welcome">
            <h1>Welcome, Ahmad!</h1>
            <p>Here's an overview of the issues you've reported.</p>
          </div>

          <DashboardStats />

          <ReportBanner />

          <LatestReport />

        </div>
      </main>

      <Footer />
    </>
  );
}

export default CitizenDashboard;