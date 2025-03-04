-- Insert new event into the events table
INSERT INTO events (eventName, address, ticketPrice, date, time, description, poster)
VALUES ('eventName', 'address', 'ticketPrice', 'date', 'time', 'description', 'posterPath');

-- Search events by eventName or address
SELECT * 
FROM events
WHERE eventName LIKE '%search%' 
   OR address LIKE '%search%';

-- Fetch 8 random events for featured events
SELECT * 
FROM events
ORDER BY RAND()
LIMIT 8;

-- Fetch all events for admin
SELECT * 
FROM events;

-- Paginate events with 8 events per page (with pagination)
SELECT * 
FROM events
LIMIT 8 OFFSET (page_number - 1) * 8;

-- Get a specific event by ID
SELECT * 
FROM events
WHERE id = 'event_id';

-- Delete event by ID
DELETE FROM events
WHERE id = 'event_id';

