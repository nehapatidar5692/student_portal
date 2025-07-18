import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rollNumber: "",
    course: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", formData);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Student Register</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <input
            className="form-control"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="rollNumber"
            placeholder="Roll No"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="course"
            placeholder="Course"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
