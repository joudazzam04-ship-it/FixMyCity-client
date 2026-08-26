import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CitizenDashboard from "./pages/CitizenDashboard.jsx";
import ReportIssue from "./pages/ReportIssue.jsx";
import MyReports from "./pages/MyReports.jsx";
import ReportDetails from "./pages/ReportDetails.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/citizen/dashboard"
          element={<CitizenDashboard />}
        />

        <Route
          path="/citizen/report"
          element={<ReportIssue />}
        />
        <Route
          path="/citizen/reports"
          element={<MyReports />}
        />
        <Route
          path="/citizen/reports/:id"
          element={<ReportDetails />}
        />
        <Route
          path="/employee/dashboard"
          element={<EmployeeDashboard />}
        />

      </Routes>
    </Router>
  );
}

export default App;