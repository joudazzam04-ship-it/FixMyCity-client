import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";

import logo from "../../assets/logo.png";
import "../../css/auth/Auth.css";


function RegisterPage({ users, setUsers, setCurrentUser }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister() {
    setError("");

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    const emailTaken = users.some(
      (user) => user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (emailTaken) {
      setError("An account with this email already exists.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      role: "citizen",
      email: email.trim(),
      password: password,
      phone: phone.trim(),
      status: "Active",
      joinedOn: new Date().toLocaleDateString(),
      department: null
    };

    setUsers((currentUsers) => [...currentUsers, newUser]);
    setCurrentUser(newUser);

    navigate("/citizen/dashboard");
  }

  return (
    <main className="auth-page">
      <div className="auth-card">

        <div className="auth-brand">
          <img src={logo} alt="FixMyCity" />
          <h1>FixMyCity</h1>
        </div>

        <h2>Create your account</h2>
        <p className="auth-subtitle">
          Register as a citizen to report issues in your city.
        </p>

        {error !== "" && <div className="auth-error">{error}</div>}

        <div className="auth-field">
          <label htmlFor="name">Full Name</label>
          <div className="auth-input">
            <FiUser />
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="reg-email">Email</label>
          <div className="auth-input">
            <FiMail />
            <input
              id="reg-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="phone">Phone Number</label>
          <div className="auth-input">
            <FiPhone />
            <input
              id="phone"
              type="tel"
              placeholder="+962 7 0000 0000"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="reg-password">Password</label>
          <div className="auth-input">
            <FiLock />
            <input
              id="reg-password"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="auth-input">
            <FiLock />
            <input
              id="confirm-password"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleRegister();
                }
              }}
            />
          </div>
        </div>

        <button
          type="button"
          className="auth-submit-button"
          onClick={handleRegister}
        >
          Create Account
        </button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>

      </div>
    </main>
  );
}

export default RegisterPage;