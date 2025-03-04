import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/admin/booked-events.css";  // Your custom styles

const BookedEvents = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user-bookings/${id}`);
        console.log("API Response:", response.data); // Debugging log
        setBookings(response.data.bookings); // Set the bookings data
      } catch (err) {
        setError("Failed to load booked events.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [id]);

  return (
    <section>
      <div className="registration-container">
        <h2>Booked Events</h2>

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
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking.booking_id}>
                    <td>{booking.booking_id}</td>
                    <td>{booking.user_id}</td>
                    <td>{booking.event_id}</td>
                    <td>{booking.event_name}</td>
                    <td>{booking.address}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-data">No bookings found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default BookedEvents;
