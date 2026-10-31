import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ⚠️ Remember to verify/adjust this path to match your project structure
import { loginUser } from "../../features/authSlice"; 

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Extract authentication state from the Redux store
  const { user, status, error } = useSelector((state) => state.auth);

  // Component local state for managing user input
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Update local state dynamically as the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission and dispatch the action
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: formData.email.trim().toLowerCase(),
        password: formData.password.trim(),
      })
    );
  };

  // 🔑 Redirect the user to the home screen after a successful login
  useEffect(() => {
    if (status === "succeeded" && user) {
      navigate("/userdashboard");
    }
  }, [status, user, navigate]);

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Login</h2>

      <form onSubmit={handleLogin} className="p-4 border rounded shadow-sm bg-light">
        {/* Email Input */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            autoComplete="username"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            autoComplete="current-password"
            required
          />
        </div>

        {/* Dynamic Action Button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Error Feedback Display */}
      {status === "failed" && error && (
        <p className="text-danger mt-3 text-center">{error}</p>
      )}

      {/* Success Feedback Display */}
      {status === "succeeded" && user && (
        <h5 className="text-success mt-3 text-center">Successful</h5>
      )}
    </div>
  );
};

export default Login;
