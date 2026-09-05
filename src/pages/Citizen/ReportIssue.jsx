import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import Footer from "../../components/Home/homePage/Footer";

import ReportForm from "../../components/Citizen/reportIssue/ReportForm";
import MapSection from "../../components/Citizen/reportIssue/MapSection";
import ImageUpload from "../../components/Citizen/reportIssue/ImageUpload";

import "../../css/reportIssue/ReportIssue.css";

function ReportIssue({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;

  const [categories, setCategories] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [noticedDate, setNoticedDate] = useState("");
  const [image, setImage] = useState(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:5000/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  const handleSubmit = async () => {
    if (title.trim() === "" || category === "" || description.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }

    if (latitude === null || longitude === null) {
      alert("Please pin the location of the issue on the map.");
      return;
    }

    setSubmitting(true);

    const res = await fetch("http://localhost:5000/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-role": user.role,
      },
      body: JSON.stringify({
        title: title.trim(),
        description: description.trim(),
        location: location,
        latitude: latitude,
        longitude: longitude,
        image: image,
        category_id: Number(category),
        reported_by: user.id,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      setSubmitting(false);
      return;
    }

    alert("Report submitted successfully");
    navigate("/citizen/reports");
  };

  return (
    <>
      <CitizenNavbar currentUser={user} setCurrentUser={setCurrentUser} />

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
              categories={categories}
              location={location}
              setLocation={setLocation}
              description={description}
              setDescription={setDescription}
              noticedDate={noticedDate}
              setNoticedDate={setNoticedDate}
              onSubmit={handleSubmit}
              submitting={submitting}
            />

            <div className="report-form-right">
              <MapSection
                location={location}
                setLocation={setLocation}
                latitude={latitude}
                longitude={longitude}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
              />

              <ImageUpload image={image} setImage={setImage} />
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ReportIssue;