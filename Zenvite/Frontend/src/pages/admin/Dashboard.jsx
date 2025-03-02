import React from 'react';
import { useNavigate } from "react-router-dom";
import "../../styles/admin/dashboard.css"

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddEventClick = () => {
    navigate('/add-events');
  };

  return (
    <section className="dashboard">
      <div className="container">
        <h2 className="text-center mb-4">Admin Dashboard</h2>
        <div className="text-center">
          <button 
            className="add-events-btn"
            onClick={handleAddEventClick}>
            Add Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
