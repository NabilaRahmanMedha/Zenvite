import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/admin/event-management.css";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/events?admin=true");
        // Extracts the array of events
        setEvents(response.data.events || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const deleteEvent = async (eventId) => {
    try {
      //delete request to backend
      await axios.delete(`http://127.0.0.1:8000/api/events/${eventId}`);
      // Remove event from frontend state
      setEvents(events.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <section className="event-management">
      <div className="container">
        <h2 className="text-center mb-4">Added Events</h2>
        <div className="row">
        {Array.isArray(events) && events.length > 0 ? (
            events.map((event) => (
              <div className="col-lg-4 col-md-6 mb-4" key={event.id}>
                <div className="event-card">
                  <div className="event-img">
                    <img src={event.poster} alt={event.eventName} />
                  </div>
                  <div className="event-info">
                    <h5>{event.eventName}</h5>
                    <p className="event-details">
                      <strong>Location:</strong> {event.address}
                    </p>
                    <p className="event-details">
                      <strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time}
                    </p>
                    <p className="event-details">
                      <strong>Price:</strong> BDT {event.ticketPrice}
                    </p>
                    <button
                      className="more-info-btn"
                      onClick={() => navigate(`/admin/event/${event.id}/registrations`)}
                    >
                      Registration Info
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteEvent(event.id)}
                    >
                      Delete Event
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No events available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventManagement;
