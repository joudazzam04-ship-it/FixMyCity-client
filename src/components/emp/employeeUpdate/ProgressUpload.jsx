import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import axios from "axios";

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

    try {

      // Upload one image at a time
      for (const file of filesToUpload) {

        const base64 = await readFileAsBase64(file);

        await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/reports/${report.id}/images`,

          // Body
          {
            image: base64
          },

          // Headers
          {
            headers: {
              "x-role": user.role
            }
          }
        );
      }

      event.target.value = "";
      onUpdated();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to upload image"
      );

      event.target.value = "";

    } finally {

      setUploading(false);

    }
  };


  // Convert image file to Base64
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

      <p>
        Add photos showing the progress or completed work.
      </p>


      <label
        htmlFor="progress-images"
        className="progress-upload-area"
      >

        <FiUploadCloud className="upload-icon" />

        <h4>
          {uploading
            ? "Uploading..."
            : "Click to upload images"}
        </h4>

        <span>
          JPG or PNG, maximum 5 images
        </span>

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

            <div
              className="progress-image-item"
              key={image.id || index}
            >

              <img
                src={image.image_path}
                alt={`Progress ${index + 1}`}
              />

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default ProgressUpload;