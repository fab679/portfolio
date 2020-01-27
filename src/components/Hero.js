import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function Hero(props){
  return(
    <Jumbotron className="bg-transparent Jumbutron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>
            {props.title && <h2 className="display-3 font-weight-bolder">{props.title}</h2>}
            { props.subTitle && <h4 className="display-4 font-weight-light">{props.subTitle}</h4> }
            { props.text && <h4 className="lead font-weight-light">{props.text}</h4> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Hero
