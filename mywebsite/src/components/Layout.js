import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigation } from './Navbar'
import styled, { withTheme } from 'styled-components';
import { Home } from '../Home'; 
import { About } from '../About'; 
import { Experience } from '../Experience';
import { Jumbotron } from './Jumbotron';


const Styles = styled.div`
    #sidebar-wrapper{
        min-height: 100vh !important;
        width: 100vw;
        margin-left: -1rem;
        -webkit-transition: margin .25s ease-out;
        -moz-transition: margin .25s ease-out;
        -o-transition: margin .25s ease-out;
        transition: margin .25s ease-out;
        background-color: #B3D8D6;
    }
    #sidebar-wrapper .sidebar-heading {
        padding: 0.875rem 1.25rem;
        font-size: 1.2rem;
    }
    #page-content-wrapper {
        min-width: 0;
        width: 100%;
    }
    #main-content-text {
        color: white; 
        background-color: #9FB9BB;
        margin-left: 30px;
        margin-right: 30px;

    }
    #contact {
        background-color: #928E6B;
    }
    #jumbo_tron {
        padding: 0;
    }
    .openbtn {
        width: 2%;
        height: 5%;
        cursor: pointer;
        background-color: #111;
        color: white;
        border: none;
        position:absolute; 
        top:0; 
        right:0;
      }
      
      .openbtn:hover {
        background-color: #444;
      }
      
`;

export const Layout = (props) => (
    <Styles>
        <Row>
            <Navigation />
            <Col  id = "jumbo_tron">
                <Jumbotron />
            </Col>
            <button class="openbtn" onclick="openContact()">☰</button>
            {/* <Col sm id = "contact"></Col> */}
        </Row>
    </Styles>
)