import React from "react";
import { FiImage } from "react-icons/fi";

import "../../css/reportIssue/ReportIssue.css";

function ImageUpload() {
  return (
    <div className="report-field">
      <label>Upload Photo (optional)</label>

      <div className="report-upload-box">
        <FiImage className="report-upload-icon" />

        <p>Drag and drop an image here</p>

        <span>or</span>

        <label className="report-file-button">
          Choose File

          <input
            type="file"
            accept="image/png, image/jpeg"
            hidden
          />
        </label>

        <small>JPG, PNG up to 5MB</small>
      </div>
    </div>
  );
}

export default ImageUpload;