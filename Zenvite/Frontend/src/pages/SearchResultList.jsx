import React from "react";
import EventCard from "../shared/EventCard";


const SearchResultList = ({ results, searchPerformed }) => {
  if (searchPerformed && (!results || results.length === 0)) {
    return <div className="no-results">No events found.</div>;
  }

  return (
    <div className="search-results">
      {results.length > 0 && <h3>Search Results</h3>}
      <div className="event-grid">
        {results.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultList;
