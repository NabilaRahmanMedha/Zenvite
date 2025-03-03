import React, { useState, useRef } from 'react';
import axios from 'axios';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import SearchResultList from "../pages/SearchResultList";


const SearchBar = () => {
  const eventNameRef = useRef('');
  const addressRef = useRef('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if search has been performed

  const searchHandler = async (e) => {
    e.preventDefault();

    const eventName = eventNameRef.current.value.trim();
    const address = addressRef.current.value.trim();

    if (eventName === '' && address === '') {
      return alert('Please enter an event name or location to search.');
    }

    setLoading(true);
    setSearchPerformed(true); // Mark that search has been performed

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/events', {
        params: { search: eventName || address },
      });

      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4" onSubmit={searchHandler}>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span><i className="ri-search-line"></i></span>
            <div>
              <h6>Event Name</h6>
              <input type="text" placeholder="Search event" ref={eventNameRef} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span><i className="ri-map-pin-line"></i></span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Search location" ref={addressRef} />
            </div>
          </FormGroup>

          <button className="search__icon" type="submit">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>

      {loading && <div>Loading...</div>}
      
      {/* Display Search Results only if search has been performed */}
      <SearchResultList results={searchResults} searchPerformed={searchPerformed} />
    </Col>
  );
};

export default SearchBar;
