-- Insert a new booking
INSERT INTO bookings (user_id, event_id, full_name, email, phone, ticket_number, transaction_id, total_amount)
VALUES ('user_id', 'event_id', 'fullName', 'email@example.com', 'phone_number', 'ticketNumber', 'transactionId', 'totalAmount');

-- bookings for a specific user
SELECT 
    bookings.id AS booking_id, 
    bookings.user_id, 
    users.name AS user_name, 
    bookings.event_id, 
    events.eventName AS event_name, 
    events.address, 
    events.date, 
    events.time
FROM bookings
JOIN users ON bookings.user_id = users.id
JOIN events ON bookings.event_id = events.id
WHERE bookings.user_id = 'user_id';

-- all bookings for a specific event

    bookings.id AS booking_id, 
    bookings.user_id, 
    bookings.event_id, 
    events.eventName AS event_name, 
    bookings.full_name, 
    bookings.email, 
    bookings.phone, 
    bookings.transaction_id, 
    bookings.ticket_number
FROM bookings
JOIN events ON bookings.event_id = events.id
WHERE bookings.event_id = 'event_id';

