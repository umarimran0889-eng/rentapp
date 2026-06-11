import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  const handleGoBack = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center p-5 max-w-md">
        <h1 className="display-1 fw-extrabold text-danger mb-2">404</h1>
    
        <h2 className="fw-bold text-dark mb-3">Page Not Found</h2>
        <p className="text-muted mb-4 fs-5">
          Oops! The page you are looking for doesn't exist, has been removed, or its URL was mistyped.
        </p>
        <button 
          onClick={handleGoBack} 
          className="btn btn-primary px-4 py-2 fw-bold shadow-sm"
        >
          {isAuthenticated ? "Back to Dashboard" : "Go to Homepage"}
        </button>
      </div>
    </div>
  );
};

export default NotFound;