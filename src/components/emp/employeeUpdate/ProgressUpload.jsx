import React from "react";
import { FiUploadCloud, FiX } from "react-icons/fi";

function ProgressUpload({ report, setReports }) {
  const images = report.progressImages;

  function handleImageChange(event) {
    const selectedFiles = Array.from(event.target.files);
    const newImages = selectedFiles.map((file) => URL.createObjectURL(file));

    setReports((currentReports) =>
      currentReports.map((item) =>
        item.id === report.id
          ? {
              ...item,
              progressImages: [...item.progressImages, ...newImages].slice(0, 5)
            }
          : item
      )
    );

    event.target.value = "";
  }

  function removeImage(index) {
    setReports((currentReports) =>
      currentReports.map((item) =>
        item.id === report.id
          ? {
              ...item,
              progressImages: item.progressImages.filter(
                (image, imageIndex) => imageIndex !== index
              )
            }
          : item
      )
    );
  }

  return (
    <div className="progress-upload-card">
      <h2>Upload Progress Images</h2>
      <p>Add photos showing the progress or completed work.</p>

      <label htmlFor="progress-images" className="progress-upload-area">
        <FiUploadCloud className="upload-icon" />
        <h4>Click to upload images</h4>
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
            <div className="progress-image-item" key={index}>
              <img src={image} alt={`Progress ${index + 1}`} />
              <button type="button" onClick={() => removeImage(index)}>
                <FiX />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProgressUpload;