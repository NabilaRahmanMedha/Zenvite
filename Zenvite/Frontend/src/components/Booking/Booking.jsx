import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Booking = ({ event }) => {
  const { id, ticketPrice } = event;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    fullName: "",
    phone: "",
    ticketNumber: 1,
    transactionId: "",
    email: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const totalAmount = Number(ticketPrice) * Number(credentials.ticketNumber);

  // Send Booking Data to the Backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/bookings", {
        event_id: id,
        fullName: credentials.fullName,
        email: credentials.email,
        phone: credentials.phone,
        ticketNumber: credentials.ticketNumber,
        transactionId: credentials.transactionId,
        totalAmount: totalAmount,
      });

      if (response.status === 201) {
        alert("Booking successful!");
        navigate("/thank-you");
      } else {
        alert("Booking failed! Please try again.");
      }
    } catch (error) {
      console.error("Error booking ticket:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          BDT {ticketPrice}
          <span> /per person</span>
        </h3>
      </div>

      {/*================ Booking Form ====================*/}
      <div className="booking__form">
        <h5>Booking Information</h5>
        <Form className="booking__info-form" onSubmit={handleSubmit}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              value={credentials.fullName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              value={credentials.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              value={credentials.phone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="text"
              placeholder="Transaction ID"
              id="transactionId"
              required
              value={credentials.transactionId}
              onChange={handleChange}
            />
            <input
              type="number"
              min="1"
              placeholder="Number of tickets"
              id="ticketNumber"
              required
              value={credentials.ticketNumber}
              onChange={handleChange}
            />
          </FormGroup>

          <Button className="btn primary__btn w-100 mt-4" type="submit">
            Book Now
          </Button>
        </Form>
      </div>

      {/* =============== Booking Summary ================ */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              BDT {ticketPrice} <i className="ri-close-line"></i>{" "}
              {credentials.ticketNumber} tickets
            </h5>
            <span>BDT {totalAmount}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>BDT {totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Booking;
