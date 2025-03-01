import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import "../styles/addEvent.css";
import { CommonSection } from "../shared/CommonSection";

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    address: "",
    ticketPrice: "",
    date: "",
    time: "",
    description: "",
    poster: null,
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setEventData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setEventData((prev) => ({ ...prev, poster: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append data to FormData (required for file upload)
    formData.append("eventName", eventData.eventName);
    formData.append("address", eventData.address);
    formData.append("ticketPrice", eventData.ticketPrice);
    formData.append("date", eventData.date);
    formData.append("time", eventData.time);
    formData.append("description", eventData.description);
    if (eventData.poster) {
      formData.append("poster", eventData.poster);
    }

    try {
      // Make API request to Laravel backend
      const response = await axios.post("http://127.0.0.1:8000/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Event submitted successfully!");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("Failed to submit event. Please try again.");
    }
  };

  return (
    <>
      <CommonSection title={"Add Your Event"} />
      <section>
        <Container>
          <Row>
            <Col lg="5" className="m-auto">
              <div className="form-container">
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="eventName">Event Name</Label>
                    <Input type="text" id="eventName" placeholder="Enter event name" required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="text" id="address" placeholder="Enter event address" required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="ticketPrice">Ticket Price (per person)</Label>
                    <Input type="number" id="ticketPrice" placeholder="Enter ticket price" required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="date" id="date" required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="time">Time</Label>
                    <Input type="time" id="time" required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="poster">Upload Poster (PNG/JPG)</Label>
                    <Input type="file" id="poster" accept="image/png, image/jpeg" required onChange={handleFileChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Event Description</Label>
                    <Input type="textarea" id="description" rows="3" placeholder="Enter event details" required onChange={handleChange} />
                  </FormGroup>
                  <Button type="submit" className="submit-btn">Submit Event</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AddEvent;
