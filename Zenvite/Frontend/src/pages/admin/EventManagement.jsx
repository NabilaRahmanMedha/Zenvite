// EventManagement.js (Updated)
import React from "react";
import { useNavigate } from "react-router-dom";
import events from "../../assets/data/events";
import "../../styles/admin/event-management.css";

const EventManagement = () => {
  const navigate = useNavigate();

  return (
    <section className="event-management">
      <div className="container">
        <h2 className="text-center mb-4">Added Events</h2>
        <div className="row">
          {events.map((event) => (
            <div className="col-lg-4 col-md-6 mb-4" key={event.id}>
              <div className="event-card">
                <div className="event-img">
                  <img src={event.photo} alt={event.title} />
                </div>
                <div className="event-info">
                  <h5>{event.title}</h5>
                  <p className="event-details">
                    <strong>Location:</strong> {event.city}
                  </p>
                  <p className="event-details">
                    <strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time}
                  </p>
                  <p className="event-details">
                    <strong>Price:</strong> ${event.price}
                  </p>
                  <button
                    className="more-info-btn"
                    onClick={() => navigate(`/admin/event/${event.id}/registrations`)}
                  >
                    Registration Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventManagement;