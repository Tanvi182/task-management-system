
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();


    try {
      await dispatch(registerUser(formData)).unwrap();

      alert("Registration Successful!");

      setFormData({
        name: "",
        email: "",
        password: ""
      });

      navigate("/register");

    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
       <h2 className="mb-4 text-center">Register</h2>

      <form onSubmit={handleRegister}  className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
        <label htmlFor="" className="form-label fw-semibold">
            Name 
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          autoComplete="username"
          required
        />

        <div className="mb-3">

        <label htmlFor="" className="form-label fw-semibold">
            Email 
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          autoComplete="email" 
          required
        />
        </div>

        <div className="mb-3">
        <label htmlFor="" className="form-label fw-semibold">
            Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
            autoComplete="new-password"
          required
        />
        </div>


        <button type="submit" disabled={status === "loading"} className="btn btn-primary w-100">
          {status === "loading" ? "Registering..." : "Register"}
        </button>

        </div>
      </form>

      {error && <p>{error}</p>}

    </div>
  );
};

export default Register;
