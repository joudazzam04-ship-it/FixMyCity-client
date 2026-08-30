import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import Footer from "../../components/Home/homePage/Footer";

import ReportForm from "../../components/Citizen/reportIssue/ReportForm";
import MapSection from "../../components/Citizen/reportIssue/MapSection";
import ImageUpload from "../../components/Citizen/reportIssue/ImageUpload";

import "../../css/reportIssue/ReportIssue.css";

function ReportIssue({ reports, currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [noticedDate, setNoticedDate] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit() {
    if (
      title.trim() === "" ||
      category === "" ||
      location.trim() === "" ||
      description.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const today = new Date().toLocaleDateString();

    const newReport = {
      id: Date.now(),
      title: title,
      category: category,
      location: location,
      description: description,
      reportedDate: today,
      noticedDate: noticedDate,
      image: image,
      status: "Pending Review",

      reportedBy: 101,
      department: null,
      assignedTo: null,
      assignedDate: null,
      priority: null,
      adminNote: "",

      notes: [],
      progressImages: [],

      history: [{ status: "Pending Review", date: today }]
    };

    setReports((currentReports) => [...currentReports, newReport]);

    alert("Report submitted successfully");
    navigate("/citizen/reports");
  }

  return (
    <>
  <CitizenNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <main className="report-issue-page">
        <div className="report-issue-container">

          <div className="report-issue-heading">
            <h1>Report a New Issue</h1>
            <p>Help us improve the city by providing details about the problem.</p>
          </div>

          <div className="report-form-card">

            <ReportForm
              title={title}
              setTitle={setTitle}
              category={category}
              setCategory={setCategory}
              location={location}
              setLocation={setLocation}
              description={description}
              setDescription={setDescription}
              noticedDate={noticedDate}
              setNoticedDate={setNoticedDate}
              onSubmit={handleSubmit}
            />

            <div className="report-form-right">
              <ImageUpload image={image} setImage={setImage} />
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