import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/admin/event-registration.css";

const EventRegistrationInfo = () => {
  const { id } = useParams();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/event-registrations/${id}`);
        setRegistrations(response.data.bookings); 
      } catch (err) {
        setError("Failed to load registrations.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [id]);

  return (
    <section>
      <div className="registration-container">
        <h2>Registrations Info</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <table className="registration-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>User ID</th>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Transaction ID</th>
                <th>Ticket Quantity</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length > 0 ? (
                registrations.map((reg) => (
                  <tr key={reg.id}>
                    <td>{reg.id}</td>
                    <td>{reg.user_id}</td>
                    <td>{reg.event_id}</td>
                    <td>{reg.event_name}</td> 
                    <td>{reg.full_name}</td>
                    <td>{reg.email}</td>
                    <td>{reg.phone}</td>
                    <td>{reg.transaction_id}</td>
                    <td>{reg.ticket_number}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="no-data">No registrations found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default EventRegistrationInfo;
