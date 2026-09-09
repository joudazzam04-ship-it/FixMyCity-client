import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";

import CitizenNavbar from "../../components/Citizen/citizenDashboard/CitizenNavbar";
import Footer from "../../components/Home/homePage/Footer";

import "../../css/profile/Profile.css";

function CitizenProfile({ currentUser, setCurrentUser }) {
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");
  const user = currentUser || savedUser;

  const [profile, setProfile] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    if (!user) return;

    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/${user.id}`, {
      headers: { "x-role": user.role },
    });
    const data = await res.json();

    if (res.ok) {
      setProfile(data);
      setName(data.name);
      setPhone(data.phone || "");
    }
  };

  const handleSaveProfile = async () => {
    setMessage("");
    setError("");

    if (name.trim() === "") {
      setError("Name cannot be empty.");
      return;
    }

    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/users/${user.id}/profile`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-role": user.role,
        },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    // Keep the logged-in user in sync so the navbar shows the new name.
    const updated = { ...user, name: data.name, phone: data.phone };
    localStorage.setItem("user", JSON.stringify(updated));
    setCurrentUser(updated);

    setMessage("Profile updated successfully.");
    fetchProfile();
  };

  

  function formatDate(value) {
    if (!value) return "—";
    return new Date(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <>
      <CitizenNavbar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="profile-page">
        <div className="profile-container">

          <div className="profile-heading">
            <h1>My Profile</h1>
            <p>View and update your account information.</p>
          </div>

          {profile && (
            <section className="profile-card">
              <div className="profile-summary">
                <div className="profile-avatar">
                  <FiUser />
                </div>

                <div>
                  <h2>{profile.name}</h2>
                  <p>{profile.email}</p>
                  <span className="profile-role-badge">{profile.role}</span>
                </div>
              </div>

              <div className="profile-meta">
                <div>
                  <span className="profile-label">Member since</span>
                  <p>{formatDate(profile.joined_on)}</p>
                </div>

                <div>
                  <span className="profile-label">Account status</span>
                  <p>{profile.status}</p>
                </div>
              </div>
            </section>
          )}

          <section className="profile-card">
            <h2>Account Details</h2>

            {message !== "" && <div className="profile-success">{message}</div>}
            {error !== "" && <div className="profile-error">{error}</div>}

            <div className="profile-field">
              <label htmlFor="profile-name">Full Name</label>
              <div className="profile-input">
                <FiUser />
                <input
                  id="profile-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>

            <div className="profile-field">
              <label htmlFor="profile-email">Email</label>
              <div className="profile-input profile-input-disabled">
                <FiMail />
                <input
                  id="profile-email"
                  type="email"
                  value={profile ? profile.email : ""}
                  disabled
                />
              </div>
              <small>Email cannot be changed.</small>
            </div>

            <div className="profile-field">
              <label htmlFor="profile-phone">Phone Number</label>
              <div className="profile-input">
                <FiPhone />
                <input
                  id="profile-phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>

            <button
              type="button"
              className="profile-save-button"
              onClick={handleSaveProfile}
            >
              Save Changes
            </button>
          </section>
</div>
      </main>

      <Footer />
    </>
  );
}

export default CitizenProfile;