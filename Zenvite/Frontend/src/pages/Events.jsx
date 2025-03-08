import React, { useState, useEffect } from "react";
import { CommonSection } from "../shared/CommonSection";
import "../styles/event.css";
import EventCard from "../shared/EventCard";
import SearchBar from "../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import dayjs from "dayjs";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/events`
        );
        if (response.data && response.data.events) {
          setEvents(response.data.events);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []); // Only run on component mount

  // Get current date
  const currentDate = dayjs().format("YYYY-MM-DD");

  // Filter past events
  const liveevents = events.filter(
    (event) => dayjs(event.date, "YYYY-MM-DD").isAfter(currentDate)
  );

  return (
    <>
      <CommonSection title="Upcoming Events!" description="Explore the Universe of Events at Your Fingertips." />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {liveevents.length > 0 ? (
              liveevents.map((event) => (
                <Col lg="3" className="mb-4" key={event.id}>
                  <EventCard event={event} />
                </Col>
              ))
            ) : (
              <p className="text-center w-100">No events available</p>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
