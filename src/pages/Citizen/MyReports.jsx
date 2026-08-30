import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import PageTitle from "../../components/Citizen/myReports/PageTitle";
import ReportsTable from "../../components/Citizen/myReports/ReportsTable";
import Footer from "../../components/Home/homePage/Footer";

import "../../css/myReport/MyReport.css";

function MyReports({ reports, currentUser, setCurrentUser }) {
  return (
    <>
    
  <CitizenNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <main className="my-reports-page">
        <div className="my-reports-container">
          <PageTitle />
<ReportsTable reports={reports} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyReports;