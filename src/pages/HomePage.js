import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Slide from '../components/Slider';

function HomePage(props){
  return(
    <Container fluid={true} >
      <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
      <Slide /><br></br>
      <Carousel />
    </Container>

  );
}
export default HomePage
