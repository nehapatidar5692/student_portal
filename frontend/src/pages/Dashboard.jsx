import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(res.data.msg);
      } catch (err) {
        console.log("Dashboard Error:", err.response?.data || err.message);
        setMessage(err.response?.data?.msg || "Unauthorized access");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="alert alert-info">
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
