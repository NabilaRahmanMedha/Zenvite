import React, { useEffect, useState } from "react";
import EventCard from "../../shared/EventCard";
import { Col, Row } from "reactstrap";
import axios from "axios";

const FeaturedEventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/events?featured=true");
    

        if (response.data && response.data.events) {
          setEvents(response.data.events);
        } else {
          console.error("Unexpected API response:", response.data);
          setEvents([]); 
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]); 
      }
    };
    

    fetchEvents();
  }, []);

  return (
    <Row>
      {events.length > 0 ? (
        events.map((event) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={event.id}>
            <EventCard event={event} />
          </Col>
        ))
      ) : (
        <p className="text-center w-100">No events available</p>
      )}
    </Row>
  );
};

export default FeaturedEventList;
