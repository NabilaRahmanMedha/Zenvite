import React, { useState, useEffect } from "react";
import { CommonSection } from "../shared/CommonSection";
import "../styles/event.css";
import EventCard from "../shared/EventCard";
import SearchBar from "../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1); 
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events?page=${page}`);
        
        if (response.data && response.data.data) {
          setEvents(response.data.data);
          setPageCount(response.data.last_page);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    

    fetchEvents();
  }, [page]); 

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
            {events.length > 0 ? (
              events.map((event) => (
                <Col lg="3" className="mb-4" key={event.id}>
                  <EventCard event={event} />
                </Col>
              ))
            ) : (
              <p className="text-center w-100">No events available</p>
            )}


            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((index) => (
                  <span
                    key={index}
                    onClick={() => setPage(index + 1)} 
                    className={page === index + 1 ? "active__page" : ""}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
