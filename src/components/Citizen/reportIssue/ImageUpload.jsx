import React from "react";
import { FiImage, FiX } from "react-icons/fi";

import "../../../css/reportIssue/ReportIssue.css";

function ImageUpload({ image, setImage }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Convert the file to a base64 string so it can be sent
      // to the API as normal JSON and stored in the database.
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }

    event.target.value = "";
  };

  return (
    <div className="report-field">
      <label>Upload Photo (optional)</label>

      <div className="report-upload-box">

        {image === null ? (
          <>
            <FiImage className="report-upload-icon" />
            <p>Drag and drop an image here</p>
            <span>or</span>

            <label className="report-file-button">
              Choose File
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
                hidden
              />
            </label>

            <small>JPG, PNG up to 5MB</small>
          </>
        ) : (
          <div className="report-image-preview">
            <img src={image} alt="Report" />
            <button type="button" onClick={() => setImage(null)}>
              <FiX />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default ImageUpload;