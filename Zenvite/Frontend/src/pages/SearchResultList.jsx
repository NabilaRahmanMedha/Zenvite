import React from "react";
import EventCard from "../shared/EventCard";
import '../styles/search-resultlist.css';
import { Container, Row, Col } from "reactstrap";
import moment from "moment"; // Import moment.js for date comparison
const SearchResultList = ({ results, searchPerformed, pageCount }) => {
  if (!searchPerformed) return null;  
  const currentDate = moment().format("YYYY-MM-DD");
  const futureEvents = results.filter((event) => moment(event.date).isAfter(currentDate));

  if (futureEvents.length === 0) {
    return <div className="text-center">No future events found.</div>;
  }
  if (results.length === 0) {
    return <div className="text-center">No events found.</div>;
  }

  return (
    <section className="pt-0">
        <Container>
          <Row>
            {futureEvents.length > 0 ? (
              futureEvents.map((event) => (
                <Col lg="3" className="mb-4" key={event.id}>
                  <EventCard event={event} />
                </Col>
              ))
            ) : (
              <p className="text-center w-100">No events available</p>
            )}
          </Row>

          {/* Pagination */}
          <Col lg="12">
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentPage(index + 1)} // Set page to the clicked one
                  className={currentPage === index + 1 ? "active__page" : ""}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </Col>
        </Container>
      </section>
  );
};
export default SearchResultList;
