import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import backgroundImage from '../assets/backgroundImage.jpg';
import props from 'prop-types';
import { Home } from '../Home'; 
import { About } from '../About'; 
import { Experience } from '../Experience';
import Row from 'react-bootstrap/Row';


const Styles = styled.div`
  .jumbo {
    background: url(${backgroundImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 100%;
    position: relative;
    z-index: -2;
    margin-bottom: 0 !important;
    min-height: 300px; 
  }

  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .center-main {
    margin:0 auto; 
    float:left;
    text-align:center; 
    position: absolute;
}
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container fluid>
        <Row id = "main-content-text">
            <section id = "home" class =  "center-main"><Home /></section>
        </Row>
        <Row id = "main-content-text">
            <section id = "about"><About /></section>
        </Row>
        <Row id = "main-content-text">
            <section id = "experience"><Experience /></section>
        </Row>
      </Container>
    </Jumbo>
  </Styles>
)