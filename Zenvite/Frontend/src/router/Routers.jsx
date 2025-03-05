import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Events from '../pages/Events';
import EventsDetails from '../pages/EventsDetails';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Login from '../pages/Login';
import About from '../pages/About';
import ThankYou from '../pages/ThankYou';
import AddEvent from '../pages/AddEvent';
import Dashboard from '../pages/admin/Dashboard';
import UserManagement from '../pages/admin/UserManagement';
import EventManagement from '../pages/admin/EventManagement';
import EventRegistrationInfo from '../pages/admin/EventRegistrationInfo';
import Profile from '../pages/Profile';
import BookedEvents from '../pages/admin/BookedEvents';
import MyEvents from '../pages/MyEvents';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/events/search" element={<SearchResultList />} />
      <Route path="/about" element={<About />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/add-events" element={<AddEvent />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-events" element={<MyEvents />} />

      {/* Admin Panel Routes */}
      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/events" element={<EventManagement />} />
      <Route path="/admin/event/:id/registrations" element={<EventRegistrationInfo />} />
      <Route path="/admin/booked-events/:id" element={<BookedEvents />} />
    </Routes>
  );
};

export default Routers;
