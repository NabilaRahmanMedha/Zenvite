import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./event-card.css";

const EventCard = ({ event }) => {
  const { id, eventName, address, poster, ticketPrice, date, time } = event;

  // ensures correct url
  const imageUrl = poster 
    ? poster.startsWith("http") 
      ? poster 
      : `http://127.0.0.1:8000/storage/${poster}` 
    : "/default-event.jpg";

  return (
    <div className="event__card">
      <Card>
        <div className="event__img">
          <img 
            src={imageUrl} 
            alt={eventName} 
            onError={(e) => (e.target.src = "/default-event.jpg")} // Handle broken images
          />
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="event__location d-flex align-items-center">
              <i className="ri-map-pin-line"></i> {address}
            </span>

            <div className="event__datetime d-flex align-items-center">
              <span className="event__date d-flex align-items-center me-3">
                <i className="ri-calendar-line"></i> {date}
              </span>
              <span className="event__time d-flex align-items-center">
                <i className="ri-time-line"></i> {time}
              </span>
            </div>
          </div>

          <h5 className="event__title">
            <Link to={`/events/${id}`}>{eventName}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              BDT {ticketPrice}
              <span>/per person</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/events/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventCard;
