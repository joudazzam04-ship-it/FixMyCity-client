import React, { useState } from "react";
import { FiUploadCloud, FiX } from "react-icons/fi";

function ProgressUpload({ report, user, onUpdated }) {
  const [uploading, setUploading] = useState(false);

  const images = report.progressImages || [];

  const handleImageChange = async (event) => {
    const selectedFiles = Array.from(event.target.files);

    if (selectedFiles.length === 0) return;

    const remaining = 5 - images.length;

    if (remaining <= 0) {
      alert("You can upload a maximum of 5 images.");
      event.target.value = "";
      return;
    }

    const filesToUpload = selectedFiles.slice(0, remaining);

    setUploading(true);

    // Upload one at a time so each gets its own database row.
    for (const file of filesToUpload) {
      const base64 = await readFileAsBase64(file);

      const res = await fetch(
        `http://localhost:5000/api/reports/${report.id}/images`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-role": user.role,
          },
          body: JSON.stringify({ image: base64 }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        alert(data.message);
        setUploading(false);
        event.target.value = "";
        return;
      }
    }

    setUploading(false);
    event.target.value = "";
    onUpdated();
  };

  // Turns a file into a base64 string, wrapped in a promise
  // so it can be awaited inside the loop above.
  const readFileAsBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="progress-upload-card">
      <h2>Upload Progress Images</h2>
      <p>Add photos showing the progress or completed work.</p>

      <label htmlFor="progress-images" className="progress-upload-area">
        <FiUploadCloud className="upload-icon" />
        <h4>{uploading ? "Uploading..." : "Click to upload images"}</h4>
        <span>JPG or PNG, maximum 5 images</span>
      </label>

      <input
        id="progress-images"
        type="file"
        accept="image/png, image/jpeg"
        multiple
        onChange={handleImageChange}
        hidden
      />

      {images.length > 0 && (
        <div className="progress-image-preview">
          {images.map((image, index) => (
            <div className="progress-image-item" key={image.id || index}>
              <img src={image.image_path} alt={`Progress ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProgressUpload;