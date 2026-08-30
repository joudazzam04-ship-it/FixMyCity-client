import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import DashboardStats from "../../components/Citizen/citizenDashboard/DashboardStats";
import LatestReport from "../../components/Citizen/citizenDashboard/LatestReport";
import ReportBanner from "../../components/Citizen/citizenDashboard/ReportBanner";
import Footer from "../../components/Home/homePage/Footer";

import "../../css/citizenDashboard/CitizenDashboard.css";

function CitizenDashboard({ reports, currentUser, setCurrentUser }) {
  return (
    <>
  <CitizenNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

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