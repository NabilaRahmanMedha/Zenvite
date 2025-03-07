import React, { useEffect, useState } from "react";
import EventCard from "../../shared/EventCard";
import { Col, Row } from "reactstrap";
import axios from "axios";
import moment from "moment"; // Import moment.js for date comparison
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
   // Get current date
      const currentDate = moment().format("YYYY-MM-DD");
    
    // Filter past events
  const liveevents = events.filter((event) => moment(event.date).isAfter(currentDate));
  return (
    <Row>
      {liveevents.length > 0 ? (
        liveevents.map((event) => (
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
