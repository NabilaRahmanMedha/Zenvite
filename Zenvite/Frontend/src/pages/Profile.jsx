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
                    src="https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175763.jpg?t=st=1741019187~exp=1741022787~hmac=f08c8bf8dfa07af43fbd6b05feb2f2bb4a57e9e5e780255717b6152fcac4c263&w=740"
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
