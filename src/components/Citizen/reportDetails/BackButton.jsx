import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function BackButton() {
  return (
    <Link to="/citizen/reports" className="back-to-reports">
      <FiArrowLeft />
      Back to My Reports
    </Link>
  );
}

export default BackButton;