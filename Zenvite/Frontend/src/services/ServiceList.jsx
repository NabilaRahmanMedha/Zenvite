import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData=[
    {
        imgUrl: weatherImg,
        title: "Easy Ticket Purchase ",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgUrl: guideImg,
        title: "Multiple Payment Methods",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgUrl: customizationImg,
        title: "Smooth Scanning",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

]

const ServiceList = () => {
  return (
  <>
    {
        serviceData.map((item,index)=>(<Col lg='3' key={index}>
            <ServiceCard item={item}/>
            </Col>))
    }
  </>
  );
};

export default ServiceList;