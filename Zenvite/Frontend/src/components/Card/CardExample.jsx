import React from "react";
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from "@coreui/react";
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Import date & time icons
import "../../styles/cardexample.css";

export const CardExample = ({ event }) => {
  const { id, eventName, address, poster, ticketPrice, date, time } = event;
  const imageUrl = poster 
    ? poster.startsWith("http") 
      ? poster 
      : `http://127.0.0.1:8000/storage/${poster}` 
    : "/default-event.jpg";

  return (
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
        <CButton className="custom-card-button" color="primary" href="#">
          See Event...
        </CButton>
      </CCardBody>
    </CCard>
  );
};
