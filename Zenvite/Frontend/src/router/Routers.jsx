import React from 'react';
import{Routes, Route, Navigate} from 'react-router-dom' 

import Home from '../pages/Home';
import Events from '../pages/Events';
import EventsDetails from '../pages/EventsDetails';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Login from '../pages/Login';
import About from '../pages/About';
import ThankYou from '../pages/ThankYou';
import AddEvent from '../pages/AddEvent';



const Routers = () => {
  return (
    <Routes>
        <Route path='/'element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/events/:id' element={<EventsDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/events/search' element={<SearchResultList/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/add-events' element={<AddEvent/>}/>



    </Routes>
  )
};

export default Routers;