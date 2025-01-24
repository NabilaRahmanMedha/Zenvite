import React,{useRef, useState} from 'react';
import '../styles/event-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import eventData from '../assets/data/events';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';

import { CommonSection } from '../shared/CommonSection';

const EventsDetails = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef('')
  const [eventRating, setEventRating]=useState(null)

  // this is static data; later we will call our API and load our data from the database
  const event = eventData.find(event => event.id === id);

  // destructure properties from event object
  const { photo, title, desc, price, address, reviews, city, budget, maxGroupSize } = event;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // format date
  const options = {day: "numeric", month: "long", year: "numeric"};

  //submit request to the server

  const submitHandler =e=>{
    const reviewText =reviewMsgRef.current.value;

    

    //later will call our api
  }

  return (
    <>
    <CommonSection title={title}/>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="event__content">
                <img src={photo} alt='' />

                <div className="event__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    

                    <span>
                    <i class="ri-map-pin-2-line"></i> {city}
                    </span>
                  </div>
                  <div className="event__extra-details">
                    <span><i class="ri-currency-line"></i><h6>BDT {price} /per person</h6></span>
                   
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                
              </div>
            </Col>

            <Col lg='4'>
              <Booking event={event} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default EventsDetails;
