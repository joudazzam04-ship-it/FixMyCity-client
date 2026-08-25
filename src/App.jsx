import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CitizenDashboard from "./pages/CitizenDashboard.jsx";
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
      </Routes>
    </Router>
  );
}

export default App;