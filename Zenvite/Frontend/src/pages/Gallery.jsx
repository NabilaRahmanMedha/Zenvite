import React from "react";
import { CommonSection } from "../shared/CommonSection";
import { CardExample } from "../components/Card/CardExample";
import "../styles/gallery.css";
const Gallery = () => {
  return (
    <>
      <CommonSection 
        title="Gallery" 
        description={
          <>
            Explore our event highlights! Browse through stunning images of past concerts,<br />
            sports matches, theater performances, and more. Get a glimpse of the excitement before you book your next ticket!
          </>
        }      
      />
      <section>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "20px",margin: "100px"}}>
            <CardExample />
            <CardExample />
            <CardExample />
            <CardExample />
            <CardExample />
            <CardExample />
        </div>
      </section>
      
    </>
  );
};

export default Gallery;
