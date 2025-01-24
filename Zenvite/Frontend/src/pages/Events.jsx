import React,{useState, useEffect} from 'react';
import { CommonSection } from '../shared/CommonSection';

import '../styles/event.css'
import eventData from './../assets/data/events'
import EventCard from './../shared/EventCard'
import SearchBar from './../shared/SearchBar'


import { Container,Row ,Col} from 'reactstrap';


const Events = () => {
  
  const [pageCount,setPageCount]=useState(0)
  const [page,setPage] = useState(0)

  useEffect(()=>{
    const pages=Math.ceil(5/4) //later we will use backend data count
    setPageCount(pages);
  },[page]);

  return (<>
    <CommonSection title={"Upcoming Events!"}/>
    <section>
      <Container>
        <Row>
          <SearchBar/>
        </Row>
      </Container>
    </section>

    <section className="pt-0">
      <Container>
        <Row>
          {
            eventData?.map(event=> 
            <Col lg="3" className="mb-4" key={event.id}>
              <EventCard event={event}/>
            </Col>)
          }

          <Col lg='12'>
          <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
            {[...Array(pageCount).keys()].map(number =>(
              <span key={number} onClick={() =>setPage(number)}
              className={page===number ? "active__page" : ""}
              >
                {number+1}
              </span>
            ))}
          </div>
          </Col>
        </Row>
      </Container>
    </section>
     
  </>
  );
};

export default Events;