import CitizenNavbar from "../components/citizenDashboard/CitizenNavbar";
import PageTitle from "../components/myReports/PageTitle";
import ReportsTable from "../components/myReports/ReportsTable";
import Footer from "../components/homePage/Footer";

import "../css/myReport/MyReport.css";

function MyReports() {
  return (
    <>
      <CitizenNavbar />

      <main className="my-reports-page">
        <div className="my-reports-container">
          <PageTitle />
          <ReportsTable />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyReports;