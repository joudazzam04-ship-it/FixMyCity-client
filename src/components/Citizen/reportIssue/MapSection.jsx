import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "../../../css/reportIssue/ReportIssue.css";

const pinIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

function LocationPicker({ onSelect }) {
  useMapEvents({
    click(event) {
      onSelect(event.latlng.lat, event.latlng.lng);
    }
  });

  return null;
}

function MapSection({ location, setLocation, latitude, longitude, setLatitude, setLongitude }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ammanCenter = [31.9539, 35.9106];

  async function handleSelect(lat, lng) {
    setLatitude(lat); //function comes from ReportIssue
    setLongitude(lng); //function comes from ReportIssue
    setLoading(true); //waiting for the address API
    setError("");

    try {
      const response = await fetch(
`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      if (data.address) {
  const parts = [
    data.address.road,
    data.address.suburb || data.address.neighbourhood,
    data.address.city
  ].filter(Boolean);

  setLocation(parts.join(", "));
} else if (data.display_name) {
  setLocation(data.display_name);
}
    } catch (err) {
      setError("Could not load the address. Please type the location manually.");
    } finally {
      setLoading(false);
    }
  }

    return (
    <div className="report-location-section">

      <div className="report-field">
        <label>Location *</label>
        <div className="report-location-input">
          <FiMapPin />
          <input
            type="text"
            placeholder="Click the map to set the location"
            value={location}
            readOnly={error === ""}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
      </div>

      <div className="report-field">
        <label>Pin Location on Map *</label>

        <div className="report-map-box">
          <MapContainer
            center={ammanCenter}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <LocationPicker onSelect={handleSelect} />

            {latitude !== null && longitude !== null && (
              <Marker position={[latitude, longitude]} icon={pinIcon} />
            )}
          </MapContainer>
        </div>

        {loading && <small>Finding address...</small>}

        {error !== "" && <small className="report-map-error">{error}</small>}

        {!loading && error === "" && latitude !== null && (
          <small>
            Pinned at {latitude.toFixed(5)}, {longitude.toFixed(5)}
          </small>
        )}

        {latitude === null && (
          <small>Click on the map to pin the exact location of the issue.</small>
        )}
      </div>

    </div>
  );
}

export default MapSection;