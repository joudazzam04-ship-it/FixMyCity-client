import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import Footer from "../../components/Home/homePage/Footer";

import ReportForm from "../../components/Citizen/reportIssue/ReportForm";
import MapSection from "../../components/Citizen/reportIssue/MapSection";
import ImageUpload from "../../components/Citizen/reportIssue/ImageUpload";

import "../../css/reportIssue/ReportIssue.css";

function ReportIssue() {
  return (
    <>
      <CitizenNavbar />

      <main className="report-issue-page">
        <div className="report-issue-container">

          <div className="report-issue-heading">
            <h1>Report a New Issue</h1>

            <p>
              Help us improve the city by providing details about the problem.
            </p>
          </div>

          <div className="report-form-card">

            <ReportForm />

            <div className="report-form-right">
              <ImageUpload />
              <MapSection />
            </div>

          </div>
          

        </div>


      </main>



      <Footer />
    </>
  );
}

export default ReportIssue;