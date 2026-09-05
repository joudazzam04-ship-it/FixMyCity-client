import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiPhone, FiLock, FiGrid } from "react-icons/fi";

import EmployeeSidebar from "../../components/emp/employeeDashboard/EmployeeSidebar";

import "../../css/profile/Profile.css";

function EmployeeProfile({ currentUser, setCurrentUser }) {
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

    const res = await fetch(`http://localhost:5000/api/users/${user.id}`, {
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
      `http://localhost:5000/api/users/${user.id}/profile`,
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
    <div className="employee-dashboard-layout">
      <EmployeeSidebar currentUser={user} setCurrentUser={setCurrentUser} />

      <main className="employee-dashboard-content">
        <div className="profile-container profile-container-wide">

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
                  <span className="profile-label">Department</span>
                  <p>{profile.department || "—"}</p>
                </div>

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
              <label htmlFor="profile-department">Department</label>
              <div className="profile-input profile-input-disabled">
                <FiGrid />
                <input
                  id="profile-department"
                  type="text"
                  value={profile ? profile.department || "" : ""}
                  disabled
                />
              </div>
              <small>Only an administrator can change your department.</small>
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
    </div>
  );
}

export default EmployeeProfile;