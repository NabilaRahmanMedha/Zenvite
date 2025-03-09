import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import "../../styles/admin/dashboard.css";
import { CommonSection } from "../../shared/CommonSection";

const Dashboard = () => {
  const navigate = useNavigate();
  const [ticketData, setTicketData] = useState([]);  // State to store ticket data

  const handleAddEventClick = () => {
    navigate('/add-events');
  };

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        // Fetch the ticket sales data from the backend API
        const response = await axios.get('http://127.0.0.1:8000/api/ticket-sales');
        setTicketData(response.data);  // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching ticket sales data', error);
      }
    };

    fetchTicketData();
  }, []);  // Empty dependency array to fetch data on component mount

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
          <h3 className="text-center" style={{ color: 'white' }}>
              Ticket Sales Per Event
          </h3>
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
