import React from "react";
import "../styles/about.css";
import teamImg from "../assets/images/team.jpg";
import { CommonSection } from "../shared/CommonSection";

const About = () => {
  return (
    <>
      <CommonSection 
        title={"About Us"} 
        description={
          <>
            Explore the Universe of Events at Your Fingertips. <br />
            <strong>Email us your event details to add your events at: </strong> 
            <a href="mailto:zenvite@gmail.com">zenvite@gmail.com</a>
          </>
        }      
      />
      <section className="about-container">
        <div className="team-photo">
          <img src={teamImg} alt="Our Team" />
        </div>
        <div className="about-content">
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              At <strong>Zenvite</strong>, we are a passionate team of event enthusiasts dedicated to 
              revolutionizing the way events are planned, managed, and experienced. Our journey 
              started with a simple idea: to make event organization seamless, efficient, and accessible.
              Whether it’s a corporate seminar, a music festival, or a community gathering, we provide
              the tools and resources to bring your vision to life.
            </p>
          </div>
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to <strong>simplify event management</strong> and create an intuitive platform where 
              organizers and attendees can come together effortlessly. We strive to eliminate the common 
              challenges faced in event planning, such as ticketing complexities, communication gaps, and 
              logistical inefficiencies. 
            </p>
          </div>
          <div className="about-section">
            <h2>What We Do</h2>
            <p>
              At Zenvite, we offer a <strong>comprehensive event management solution</strong> that caters to a wide range 
              of needs. Here’s how we help:
            </p>
            <ul>
              <li><strong>Event Planning & Organization:</strong> Simplifying the entire planning process.</li>
              <li><strong>Ticketing & Registration:</strong> Secure and hassle-free attendee management.</li>
              <li><strong>Marketing & Promotion:</strong> Boosting event visibility through strategic campaigns.</li>
              <li><strong>On-Site & Virtual Support:</strong> Ensuring smooth event execution.</li>
              <li><strong>Data & Insights:</strong> Advanced analytics to track and improve event performance.</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Who Are Our Customers?</h2>
            <p>
              Our platform is designed for <strong>anyone and everyone</strong> who wants to host an amazing event. We work with:
            </p>
            <ul>
              <li><strong>Corporate Clients:</strong> Conferences, product launches, and networking events.</li>
              <li><strong>Educational Institutions:</strong> Seminars, workshops, and cultural fests.</li>
              <li><strong>Non-Profit Organizations:</strong> Fundraisers and awareness campaigns.</li>
              <li><strong>Artists & Performers:</strong> Musicians, entertainers, and speakers.</li>
              <li><strong>Individuals & Small Businesses:</strong> Weddings, birthdays, and community gatherings.</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <p>
              We know that event planning can be overwhelming, but with <strong>Zenvite</strong>, it doesn’t have to be. 
              Here’s why we stand out:
            </p>
            <ul>
              <li><strong>User-Friendly Interface:</strong> A seamless experience for both organizers and attendees.</li>
              <li><strong>Reliable & Secure:</strong> Secure ticketing, payments, and data management.</li>
              <li><strong>End-to-End Support:</strong> 24/7 customer service for all your event needs.</li>
              <li><strong>Scalability & Flexibility:</strong> Works for both small and large-scale events.</li>
              <li><strong>Passion for Innovation:</strong> We continuously evolve our features to stay ahead.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;