import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/admin/event-registration.css";

// Sample static registration data with transactionId and ticketNumber as quantity (integer)
const registrations = [
  { id: 1, eventId: "01", name: "John Doe", email: "john@example.com", phone: "123-456-7890", transactionId: "TXN12345", ticketNumber: 2 },
  { id: 2, eventId: "01", name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", transactionId: "TXN12346", ticketNumber: 1 },
  { id: 3, eventId: "02", name: "Alice Johnson", email: "alice@example.com", phone: "456-789-0123", transactionId: "TXN12347", ticketNumber: 3 },
];

const EventRegistrationInfo = () => {
  const { id } = useParams();
  const eventRegistrations = registrations.filter(reg => reg.eventId === id);

  return (
    <section>
    <div className="registration-container">
      <h2>Registrations info</h2>
      <table className="registration-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Transaction ID</th>
            <th>Ticket Quantity</th>
          </tr>
        </thead>
        <tbody>
          {eventRegistrations.length > 0 ? (
            eventRegistrations.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.id}</td>
                <td>{reg.name}</td>
                <td>{reg.email}</td>
                <td>{reg.phone}</td>
                <td>{reg.transactionId}</td>
                <td>{reg.ticketNumber}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">No registrations found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default EventRegistrationInfo;
