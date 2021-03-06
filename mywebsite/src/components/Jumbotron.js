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
    width: 100%;
    position: relative;
    margin-bottom: 0 !important;
    min-height: 300px; 
    
  }
  .overlay {
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .center-main {
    margin:0 auto; 
   
}
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container fluid>
        <section id = "main-content-text">
            <section id = "home" class = "center-main"><Home /></section>
        </section>
        <section id = "main-content-text">
            <section id = "about"><About /></section>
        </section>
        <section id = "main-content-text">
            <section id = "experience"><Experience /></section>
        </section>
      </Container>
    </Jumbo>
  </Styles>
)