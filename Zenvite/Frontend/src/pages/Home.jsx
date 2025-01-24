import React from 'react';
import '../styles/home.css'

import { Container, Row,Col, CardSubtitle} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png';

import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedEventList from '../components/Featured-events/FeaturedEventList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';


const Home = () => {
  return (
  <>

  {/* ============ hero section start =========== */}
  <section className="hero">
  <Container>
    <Row>
      <Col lg="6">
        <div className="hero__content">
          
          <h1>
            Simplify Events,
            Amplify Experiences with{" "}
            <span className="highlight">Zenvite</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis
            deleniti, aperiam odio quae aspernatur quaerat temporibus adipisci
            incidunt eaque quidem veritatis quasi quia velit provident veniam
            non vero repudiandae!
          </p>
        </div>
      </Col>
      
    </Row>

  </Container>
</section>
  {/* ============ hero section end =========== */}
  <section>
    <Container>
    <SearchBar/>

    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg='3'>
        <h5 className="services__subtitle">What we serve</h5>  
        <h2 className="services__title">We offer our best services</h2>
        </Col>

        <ServiceList/>

      </Row>
    </Container>
  </section>

  {/* ============features event section start ============*/}
  <section>
    <Container>
      <Row>
        <Col lg='12' className="mb-5">
        
        <h2 className="featured__event-title">Explore Upcomings!</h2>
        <h6 className="featured__event-title2">Explore the Universe of Events at Your Fingertips.</h6>
        </Col>

        <FeaturedEventList/>

      </Row>
    </Container>
  </section>
  

  {/* ============features event section end ============*/}

 
 {/* ============gallery section start============*/}
  <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h2 className="gallery__title">Flagship Events in Review</h2>
            <h5 className="gallery__title2">We are proud to showcase the success of our previous flagship events</h5>
          </Col>
          <Col lg='12'>
           <ErrorBoundary>

              <MasonryImagesGallery/>  
           </ErrorBoundary>
           
          </Col>
        </Row>
      </Container>
    </section>

{/* ============gallery section end============*/}
{/*testing */}


   
  
 

  </>
  );
    
};

export default Home;