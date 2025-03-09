import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { CommonSection } from "../shared/CommonSection";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    if (userId) {
      fetchUserData(userId);
    } else {
      console.error("No user_id found in local storage.");
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${userId}`);
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleViewMyEvents = () => {
    navigate(`/my-events`); // Navigate to My Events page
  };

  const handleBookTicket = () => {
    navigate(`/events`); // Navigate to the book-ticket page (adjust this route if needed)
  };

  return (
    <>
      <CommonSection title={"Profile"} />
      <section className="profile-section">
        <Container>
          <Row className="justify-content-center">
            <Col className="col1">
              <Card className="profile-card text-center">
                <div className="profile-image-container">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1683/1683692.png"
                    className="profile-picture"
                    alt="User Avatar"
                  />
                </div>
                <CardBody className="Profile-card">
                  <CardTitle tag="h4">{user?.name || "Harry Potter"}</CardTitle>
                  <CardText tag="h5">{user?.email || "hp1243@gmail.com"}</CardText>
                  <div className="profile-buttons">
                    <Button className="view-bookings-btn" onClick={handleViewMyEvents}>
                      My Events
                    </Button>
                    <Button className="book-ticket-btn" onClick={handleBookTicket}>
                      Book a Ticket
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Profile;
