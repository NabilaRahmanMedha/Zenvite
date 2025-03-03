import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { CommonSection } from '../shared/CommonSection';
import { AuthContext } from '../context/AuthContext';
import "../styles/profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

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
                  />
                </div>
                <CardBody className="Profile-card">
                  <CardTitle tag="h4">{user?.name || "Harry Potter"}</CardTitle>
                  <CardText tag="h5">{user?.email || "hp1243@gmail.com"}</CardText>
                  <div className="profile-buttons">
                    <Button className="view-bookings-btn">View Bookings</Button>
                    <Button className="book-ticket-btn">Book a Ticket</Button>
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
