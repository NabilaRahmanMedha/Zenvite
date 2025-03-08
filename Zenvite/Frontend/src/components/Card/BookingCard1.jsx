import React, { useState } from "react";
import {
  CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle,
} from "@coreui/react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTicketAlt, FaMoneyBillWave } from "react-icons/fa"; // Import icons
import axios from "axios";
import "../../styles/bookingCard.css";

export const BookingCard1 = ({ booking = {}, onDelete }) => {
  const [deleting, setDeleting] = useState(false);

  if (!booking || Object.keys(booking).length === 0) {
    return <p className="error-message">Error: Booking data is missing</p>;
  }

  const {
    booking_id,
    event_name = "No Event Name",
    poster = "/default-event.jpg",
    date = "N/A",
    time = "N/A",
    address = "N/A",
    ticket_number = 0,
    total_amount = 0
  } = booking;

  const deleteBooking = async () => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    setDeleting(true);
    try {
      await axios.delete(`http://127.0.0.1:8000/api/bookings/${booking_id}`);
      onDelete(booking_id); // Remove booking from UI
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Failed to cancel booking. Please try again.");
    }
    setDeleting(false);
  };

  return (
    <CCard className="custom-card">
      <CCardImage
        className="custom-card-image"
        orientation="top"
        src={poster}
        alt={event_name}
        onError={(e) => (e.target.src = "/default-event.jpg")}
      />
      <CCardBody className="custom-card-body">
        <CCardTitle className="custom-card-title">{event_name}</CCardTitle>
        <CCardText className="custom-card-text">
          <span className="icon-text">
            <FaMapMarkerAlt className="icon" /> {address} {/* Address Icon */}
          </span>
          <br />
          <span className="icon-text">
            <FaCalendarAlt className="icon" /> {date} | <FaClock className="icon" /> {time} {/* Date & Time */}
          </span>
          <br />
          <span className="icon-text">
            <FaTicketAlt className="icon" /> {ticket_number} Ticket(s) {/* Ticket Icon */}
          </span>
          <br />
          <span className="icon-text">
            <FaMoneyBillWave className="icon" /> Paid Amount: {total_amount} BDT {/* Payment Icon */}
          </span>
        </CCardText>
        <CButton
          className="custom-card-button"
          color="danger"
          onClick={deleteBooking}
          disabled={deleting}
        >
          {deleting ? "Cancelling..." : "Cancel Booking"}
        </CButton>
      </CCardBody>
    </CCard>
  );
};
