
import React from 'react';
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import "../../styles/admin/dashboard.css";
import { CommonSection } from "../../shared/CommonSection";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddEventClick = () => {
    navigate('/add-events');
  };

  // Static Ticket Sales Data
  const ticketData = [
    { eventName: "Music Fest", ticketsSold: 150 },
    { eventName: "Tech Conference", ticketsSold: 90 },
    { eventName: "Comedy Night", ticketsSold: 120 },
    { eventName: "Food Carnival", ticketsSold: 75 },
    { eventName: "Art Exhibition", ticketsSold: 100 }
  ];

  return (
    <>
      <CommonSection />

      <section className="dashboard">
        <div className="container">
          <h2 className="text-center mb-4">Admin Dashboard</h2>
          
          {/* Add Event Button */}
          <div className="text-center">
            <button className="add-events-btn" onClick={handleAddEventClick}>
              Add Event
            </button>
          </div>

          {/* Ticket Sales Graph */}
          <div className="chart-container">
            <h3 className="text-center">Ticket Sales Per Event</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ticketData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="eventName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ticketsSold" fill="var(--secondary-color)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
