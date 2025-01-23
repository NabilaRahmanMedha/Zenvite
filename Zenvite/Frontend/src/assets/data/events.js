import eventImg01 from "../images/tour-img01.jpg";
import eventImg02 from "../images/tour-img02.jpg";
import eventImg03 from "../images/tour-img03.jpg";
import eventImg04 from "../images/tour-img04.jpg";
import eventImg05 from "../images/tour-img05.jpg";
import eventImg06 from "../images/tour-img06.jpg";
import eventImg07 from "../images/tour-img07.jpg";

const events = [
  {
    id: "01",
    title: "Reception Wedding",
    city: "Intercontinental, Dhaka",
    budget: 300,
    address:'Somewhere',
    price: 2000,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5.0,
      },
    ],
    avgRating: 4.5,
    photo: eventImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Conference",
    city: "Intercontinental, Dhaka",
    budget: 400,
    address:'Somewhere',
    price: 2000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: eventImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Birthday Celebration",
    city: "KIB, Dhaka",
    budget: 500,
    address:'Somewhere',
    price: 990,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: eventImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Mehndi Night",
    city: "KIB, Dhaka",
    budget: 500,
    address:'Somewhere',
    price: 1500,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: eventImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Akht Ceremony",
    city: "dream convention Center",
    budget: 500,
    address:'Somewhere',
    price: 2000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5.0,
      },
    ],
    avgRating: 4.5,
    photo: eventImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Destination Wedding",
    city: "Ananda Park and Resort",
    budget: 500,
    address:'Somewhere',
    price: 10000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: eventImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Concert",
    city: "ICCB Dhaka",
    budget: 500,
    address:'Somewhere',
    price: 7000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: eventImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Haldi Night",
    city: "Intercontinental, Dhakad",
    budget: 500,
    address:'Somewhere',
    price: 2000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: eventImg01,
    featured: false,
  },
];

export default events;
