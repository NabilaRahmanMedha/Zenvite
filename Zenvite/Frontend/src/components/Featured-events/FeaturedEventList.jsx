import React from 'react';
import EventCard from '../../shared/EventCard';
import eventData from '../../assets/data/events';
import { Col } from 'reactstrap'


const FeaturedEventList = () => {
  return (<>
  {
    eventData?.map(event =>(
      <Col lg="3" className="mb-4" key={event.id}>
        <EventCard event={event}/>
      </Col>
    ))
  }
  </>
  );
};

export default FeaturedEventList;