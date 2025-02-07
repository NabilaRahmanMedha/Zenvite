import React,{useState} from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem,Button } from 'reactstrap';

import { useNavigate } from 'react-router-dom';

const Booking = ({ event, avgRating }) => {
    const {price, reviews}= event;
    const navigate = useNavigate()

    const [credentials, setCredentials] =useState({
        userId: '01', //later it will be dynamic
        userEmail:'example@gmail.com',
        fullName: '',
        phone:'',
        ticketnumber:1,
        transectionId:'',
        email:'',
    })

    const handleChange = e =>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    };

  
    const totalAmount = Number(price)*Number(credentials.ticketnumber) 

    // send data to the server

    const handleClick = e => {
         e.preventDefault();

         navigate("/thank-you");
    };

  return (
  <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>BDT {price}<span> /per person</span></h3>
        
    </div>
    {/*================booking form ====================*/}
    <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder="Full Name" id="fullName"
                required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="text" placeholder="Email" id="email"
                required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="number" placeholder="Phone" id="phone"
                required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="d-flex align-items-center gap-3">
                <input type="text" placeholder="Transection Id" id="transectionId"
                required onChange={handleChange}/>
                <input type="numder" placeholder="Number of ticket" id="ticketnumber"
                required onChange={handleChange}/>
            </FormGroup>
            
        </Form>
    </div>
    {/*================booking end====================*/}

    {/* ===============booking bottom================ */}
    <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className="border-0 px-0">
               <h5 className="d-flex align-items-center gap-1">BDT {price} <i class="ri-close-line"></i> 1 person </h5>
               <span>BDT {price}</span>
            </ListGroupItem>

            <ListGroupItem className="border-0 px-0">
               <h5>Ticket quantity</h5>
               <span>{credentials.ticketnumber}</span>
            </ListGroupItem>

            <ListGroupItem className="border-0 px-0 total">
               <h5>Total</h5>
               <span>BDT {totalAmount}</span>
            </ListGroupItem>
            
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
    </div>
  </div>
)};

export default Booking;