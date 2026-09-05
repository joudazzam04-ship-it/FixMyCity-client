import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import logo from "../../assets/logo.png";
import "../../css/auth/Auth.css";

function LoginPage({ setCurrentUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      setLoading(false);
      return;
    }

    const user = data.user;

    localStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);

    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user.role === "employee") {
      navigate("/employee/dashboard");
    } else {
      navigate("/citizen/dashboard");
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">

        <div className="auth-brand">
          <img src={logo} alt="FixMyCity" />
          <h1>FixMyCity</h1>
        </div>

        <h2>Welcome back</h2>
        <p className="auth-subtitle">Log in to continue to your account.</p>

        {error !== "" && <div className="auth-error">{error}</div>}

        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <div className="auth-input">
            <FiMail />
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <div className="auth-input">
            <FiLock />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleLogin();
                }
              }}
            />
          </div>
        </div>

        <button
          type="button"
          className="auth-submit-button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>

      </div>
    </main>
  );
}

export default LoginPage;