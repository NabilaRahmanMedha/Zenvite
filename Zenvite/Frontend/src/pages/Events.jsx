import React, { useState, useEffect } from "react";
import { CommonSection } from "../shared/CommonSection";
import "../styles/event.css";
import EventCard from "../shared/EventCard";
import SearchBar from "../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import dayjs from "dayjs";

const Events = () => {
  const [events, setEvents] = useState([]); // All events fetched from the API
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const eventsPerPage = 8; // Number of events per page

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events`);
        if (response.data && response.data.events) {
          setEvents(response.data.events);
          // Calculate the total pages based on the total number of events
          const totalEvents = response.data.events.length;
          const totalPages = Math.ceil(totalEvents / eventsPerPage);
          setPageCount(totalPages);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []); // Fetch all events on component mount

  // Get current date
  const currentDate = dayjs().format("YYYY-MM-DD");

  // Filter past events
  const liveevents = events.filter(
    (event) => dayjs(event.date, "YYYY-MM-DD").isAfter(currentDate)
  );

  // Paginate the events
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = liveevents.slice(indexOfFirstEvent, indexOfLastEvent);

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
            {currentEvents.length > 0 ? (
              currentEvents.map((event) => (
                <Col lg="3" className="mb-4" key={event.id}>
                  <EventCard event={event} />
                </Col>
              ))
            ) : (
              <p className="text-center w-100">No events available</p>
            )}
          </Row>

          {/* Pagination */}
          <Col lg="12">
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentPage(index + 1)} // Set page to the clicked one
                  className={currentPage === index + 1 ? "active__page" : ""}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default Events;
