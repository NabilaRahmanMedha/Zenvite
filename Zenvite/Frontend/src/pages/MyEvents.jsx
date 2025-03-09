import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BookingCard1 } from "../components/Card/BookingCard1";
import "../styles/myEvents.css";

const MyEvents = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      fetchUserBookings(userId);
    } else {
      navigate("/login");
    }
  }, [page]);

  const fetchUserBookings = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${userId}/bookings?page=${page}`);
      console.log("API Response:", response.data); // Debugging line

      if (response.data && Array.isArray(response.data.bookings)) {
        setBookings(response.data.bookings);
        setPageCount(response.data.last_page);
      } else {
        console.error("Unexpected API response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching user bookings:", error);
    } finally {
      setLoading(false);
    }
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
                      <BookingCard1
                        booking={booking}
                        onDelete={(id) => setBookings(bookings.filter((b) => b.booking_id !== id))}
                      />
                    </Col>
                  ))
                ) : (
                  <p className="text-center w-100">No past events available</p>
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
