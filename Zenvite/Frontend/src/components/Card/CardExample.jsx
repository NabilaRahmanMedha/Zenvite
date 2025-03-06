import React from "react";
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from "@coreui/react";
import "../../styles/cardexample.css";
export const CardExample = () => {
  return (
    <CCard className="custom-card">
      <CCardImage className="custom-card-image" orientation="top" src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />
      <CCardBody className="custom-card-body">
        <CCardTitle className="custom-card-title">Card title</CCardTitle>
        <CCardText className="custom-card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
        <CButton className="custom-card-button" color="primary" href="#">
          See Event...
        </CButton>
      </CCardBody>
    </CCard>
  );
};
