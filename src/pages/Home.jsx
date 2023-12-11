import React from 'react'
import '../styles/home.css'
import {Container, Row, Col, Button} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import heroBgImg from '../assets/images/hero-bgImg.jpg'

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

const Home = () => {
  return <>
  
  {/* Hero Section */}
  <section>
    <Container className='hero__section'>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <h1>Make Your Dream Vacation Alive</h1> 
            <Button className='btn primary__btn'>Book Now</Button>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/* End Hero Section */}

  {/* Services Section */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>
  {/* End Services Section */}

  {/* Feature Tour Section */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <h2 className="featured__tour-title">Our Featured Tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>
  {/* End Feature Tour Section */}

  </>
}

export default Home