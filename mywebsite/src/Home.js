import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pfp from './assets/pfp.jpg'
import { Icons } from './Contact'; 

const Styles = styled.div`
    .content {
        min-height:100%;
        padding-top:10%;
        padding-bottom:10%;
    }

    .center-block {
        float:left;
        text-align:center; 
        top: 50%;
    }

    .pfp {
        border-radius: 50%;
        max-width:100%;
        height: auto;
    }
    
    #header {
        font-size: 30px;
        margin: 0;
        font-family: sans;
        line-height: 120%;
    }
    #name {
        font-size:75px;
        color: black;
    }
    #info {
        float: top;
        margin-top: 0;
        padding-bottom: 2%;
        font-weight: bold;
        font-family: Roboto;
        font-size: 18px;
    }
    #number {
        color: black;
        padding-right: 10px;
    }
    #text {
        font-family: Roboto;
        font-size: 23px;
    }
`;

export const Home = () => (
    <Styles>
        <div class = "content"> 
            <Container>
                <Row>
                    <Col sm={4}>
                        <img src={pfp} class = "pfp center-block border" />
                    </Col>
                    <Col sm= {8}>
                        <p id="header">Hey there, I'm <span id = "name">Wasif Butt</span></p>
                        <p id="info"><span id="number">(613)-202-2439 </span>wasifahmadbutt@gmail.com</p>
                        <p id="text">I am an incoming third year Computer Engineering Student at the University of Toronto.
                            My interests lie within full-stack development, machine learning, and SoC design. 
                        </p>
                        <p id="text">I'm glad you're here, please click any of the icons below to get in touch!</p>
                        <Icons />
                    </Col>
                </Row>
            </Container>
        </div>
    </Styles>
)