import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center position-relative">
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-1 fw-bold text-dark">Welcome Back</h2>
          <p className="text-muted text-center mb-4 small">Sign in to access your dashboard</p>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary small">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary small">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold py-2">
              Sign In
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <>
          <div 
            className="modal-backdrop fade show" 
            onClick={() => setShowPopup(false)} 
          />

          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content border-0 shadow-lg">
                <div className="modal-header bg-danger text-white">
                  <h5 className="modal-title fw-bold">Login Failed</h5>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={() => setShowPopup(false)}
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body py-4 text-center">
                  <p className="mb-0 text-dark">Invalid username or password.</p>
                </div>
                <div className="modal-footer border-top-0">
                  <button 
                    type="button" 
                    className="btn btn-secondary px-4 fw-semibold" 
                    onClick={() => setShowPopup(false)}
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
};

export default Login;