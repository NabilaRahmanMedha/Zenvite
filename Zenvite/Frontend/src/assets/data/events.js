import { data } from "react-router-dom";
import eventImg01 from "../images/tour-img01.jpg";
import eventImg02 from "../images/tour-img02.jpg";
import eventImg03 from "../images/tour-img03.jpg";
import eventImg04 from "../images/tour-img04.jpg";
import eventImg05 from "../images/tour-img01.jpg";
import eventImg06 from "../images/tour-img02.jpg";
import eventImg07 from "../images/tour-img03.jpg";

const events = [
  {
    id: "01",
    title: "Training Session 2.0",
    city: "Intercontinental, Dhaka",
    budget: 300,
    address:'Somewhere',
    price: 200,
    maxGroupSize: 10,
    desc: "this is the description",

    photo: eventImg01,
    featured: true,
    date:"25 Feb,2025",
    time:"2:30 pm"

  },
  {
    id: "02",
    title: "Night Party",
    city: "Intercontinental, Dhaka",
    budget: 400,
    address:'Somewhere',
    price: 2000,
    maxGroupSize: 8,
    desc: "this is the description",

    photo: eventImg02,
    featured: true,
    date:"25 Feb,2025",
    time:"2:30 pm"
  },
  {
    id: "03",
    title: "Live The Music",
    city: "KIB, Dhaka",
    budget: 500,
    address:'Somewhere',
    price: 500,
    maxGroupSize: 8,
    desc: "this is the description",

    photo: eventImg03,
    featured: true,
    date:"25 Feb,2025",
    time:"2:30 pm"
  },
  {
    id: "04",
    title: "Music Night",
    city: "KIB, Dhaka",
    budget: 500,
    address:'Somewhere',
    price: 500,
    maxGroupSize: 8,
    desc: "this is the description",
  
    photo: eventImg04,
    featured: true,
    date:"25 Feb,2025",
    time:"2:30 pm"
  },
  {
    id: "05",
    title: "Training Session 2.0",
    city: "dream convention Center",
    budget: 500,
    address:'Somewhere',
    price: 200,
    maxGroupSize: 8,
    desc: "this is the description",

    photo: eventImg05,
    featured: false,
    date:"25 Feb,2025",
    time:"2:30 pm"
  },
  {
    id: "06",
    title: "Night Party",
    city: "Ananda Park and Resort",
    budget: 500,
    address:'Somewhere',
    price: 1000,
    maxGroupSize: 8,
    desc: "this is the description",
  
    photo: eventImg06,
    featured: false,
    date:"25 Feb,2025",
    time:"2:30 pm"
  },
  {
    id: "07",
    title: "live Concert 4.0",
    city: "ICCB Dhaka",
    budget: 500,
    address:'Somewhere',
    price: 700,
    maxGroupSize: 8,
    desc: "this is the description",
   
    photo: eventImg07,
    featured: false,
    date:"25 Feb,2025",
    time:"2:30 pm"
  },
  {
    id: "08",
    title: "Tranning",
    city: "Intercontinental, Dhakad",
    budget: 500,
    address:'Somewhere',
    price: 2000,
    maxGroupSize: 8,
    desc: "this is the description",
   
    photo: eventImg01,
    featured: false,
    date:"25 Feb,2025",
    time:"2:30 pm"
  },
];

export default events;
