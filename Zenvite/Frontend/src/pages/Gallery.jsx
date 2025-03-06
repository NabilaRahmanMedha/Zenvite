import React, { useState, useEffect } from "react";
import { CommonSection } from "../shared/CommonSection";
import { CardExample } from "../components/Card/CardExample";
import "../styles/gallery.css";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import moment from "moment"; // Import moment.js for date comparison

const Gallery = () => {
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

  // Get current date
  const currentDate = moment().format("YYYY-MM-DD");

  // Filter past events
  const pastEvents = events.filter((event) => moment(event.date).isBefore(currentDate));

  return (
    <>
      <CommonSection 
        title="Gallery" 
        description={
          <>
            Explore our event highlights! Browse through stunning images of past concerts,<br />
            sports matches, theater performances, and more. Get a glimpse of the excitement before you book your next ticket!
          </>
        }      
      />
      <section className="divSection">
        <Container>
          <Row>
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <Col lg="3" className="mb-4" key={event.id}>
                  <CardExample event={event} />
                </Col>
              ))
            ) : (
              <p className="text-center w-100">No past events available</p>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Gallery;
