import React, { useEffect, useState } from 'react';
import '../styles/event-details.css';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Booking from '../components/Booking/Booking';
import { CommonSection } from '../shared/CommonSection';

const EventsDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}`);
        setEvent(response.data.event);
      } catch (err) {
        setError("Failed to fetch event details.");
        console.error("Error fetching event:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading event details...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  if (!event) {
    return <p className="text-center text-danger">Event not found.</p>;
  }

  const { eventName, description, ticketPrice, address, poster, date, time } = event;

  return (
    <>
      <CommonSection title={eventName} />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="event__content">
                <img 
                  src={poster ? poster : "/default-event.jpg"} 
                  alt={eventName} 
                  className="event__img"
                  onError={(e) => (e.target.src = "/default-event.jpg")} 
                />

                <div className="event__info">
                  <h2>{eventName}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {address}
                    </span>
                  </div>
                  <div className="event__extra-details">
                    <span>
                      <i className="ri-calendar-line"></i> {date} | <i className="ri-time-line"></i> {time}
                    </span>
                    <span>
                      <i className="ri-currency-line"></i> <h6>BDT {ticketPrice} / per person</h6>
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>
              </div>
            </Col>

            <Col lg='4'>
              <Booking event={event} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EventsDetails;
