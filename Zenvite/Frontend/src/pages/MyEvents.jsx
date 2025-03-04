import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for navigation
import "../styles/myEvents.css"; // Add the CSS file

const MyEvents = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // For pagination
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      fetchUserBookings(userId);
    } else {
      navigate("/login"); // Redirect to login if no user_id found
    }
  }, [page]);

  const fetchUserBookings = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${userId}/bookings?page=${page}`);
      setBookings(response.data.bookings);
      setPageCount(response.data.last_page);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user bookings:", error);
      setLoading(false);
    }
  };

  const handleEventDetails = (eventId) => {
    navigate(`/event-details/${eventId}`); // Redirect to event details page
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
          <div className="header-spacing">
            <h2 className="my-events-title">My Booked Events</h2>
          </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Row>
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <Col lg="3" className="mb-4" key={booking.booking_id}>
                      <Card className="event-card">
                        <CardBody>
                          <CardTitle tag="h5">{booking.event_name}</CardTitle>
                          <CardText>{booking.address}</CardText>
                          <CardText>{booking.date}</CardText>
                          <Button onClick={() => handleEventDetails(booking.event_id)}>
                            View Details
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <p>No events booked yet.</p>
                )}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyEvents;
