import React from 'react';
import {Card, CardBody} from "reactstrap";
import {Link} from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating';

import "./event-card.css";

const EventCard = ({event}) => {

  const {id, title, city, photo, price, featured, reviews, date, time}= event;

  const {totalRating,avgRating}= calculateAvgRating(reviews) ;

  return (
    <div className="event__card">
      <Card>
        <div className="event__img">
          <img src={photo} alt="event__img" />
            
        </div>

        <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between ">
          <span className="event__location d-flex align-items-center justify-content-between">
          <i class="ri-map-pin-line"></i>{city}
          </span>

          



          <span className="event__rating d-flex align-items-center justify-content-between">
          <i class="ri-star-fill"></i>{avgRating===0 ? null : avgRating}
          {totalRating===0 ? (
            "Not rated"
           ) : (
          <span>({reviews.length})</span>
          )}
          </span>
          
        </div>
        <h5 className="event__title"><Link to={`/events/${id}`}>{title}</Link> 
        </h5>
        <div className="card__bottom d-flex align-items-center
        justify-content-between mt-3">
          <h5>BDT {price}<span>/per person</span></h5>

          <button className="btn booking__btn">
            <Link to={`/events/${id}`}>Book Now</Link>
          </button>
        </div>

      </CardBody>
      </Card>

      
    </div>
  )
};

export default EventCard;