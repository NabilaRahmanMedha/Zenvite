import React, { useState } from "react";
import {
  CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle,
  CModal, CModalBody, CModalFooter
} from "@coreui/react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import "../../styles/cardexample.css"; // Ensure this CSS file contains styling

export const CardExample = ({ event }) => {
  const [visible, setVisible] = useState(false); // Modal visibility state
  const { eventName, address, poster, ticketPrice, date, time } = event;
  const imageUrl = poster
    ? poster.startsWith("http")
      ? poster
      : `http://127.0.0.1:8000/storage/${poster}`
    : "/default-event.jpg";

  return (
    <>
      {/* Event Card */}
      <CCard className="custom-card">
        <CCardImage className="custom-card-image" orientation="top" src={imageUrl} />
        <CCardBody className="custom-card-body">
          <CCardTitle className="custom-card-title">{eventName}</CCardTitle>
          <CCardText className="custom-card-text">
            <span className="icon-text">
              <FaCalendarAlt className="icon" /> {date}
            </span>
            <br />
            <span className="icon-text">
              <FaClock className="icon" /> {time}
            </span>
          </CCardText>
          <CButton className="custom-card-button" color="primary" onClick={() => setVisible(true)}>
            See Event...
          </CButton>
        </CCardBody>
      </CCard>

      {/* Editable Modal (No Header) */}
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalBody className="custom-modal-body">
          <img src={imageUrl} alt={eventName} className="custom-modal-image" />
          <p className="custom-modal-text"><strong>Event Name:</strong> {eventName}</p>
          <p className="custom-modal-text"><strong>Date:</strong> {date}</p>
          <p className="custom-modal-text"><strong>Venue:</strong> {address}</p>
        </CModalBody>
        <CModalFooter className="custom-modal-footer">
          <CButton color="secondary" onClick={() => setVisible(false)} className="custom-card-button">
            Close
          </CButton>
          <CButton className="custom-card-button" color="primary" href={`/event/${eventName.replace(/\s+/g, "-").toLowerCase()}`}>
            Go to Event Page
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
