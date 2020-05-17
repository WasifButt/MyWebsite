import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-scroll'

const Styles = styled.div`
    background-color:#B3D8D6; 
    padding-left: 10%;   
    
    .navbar-brand, .navbar-nav, .navbar-link {
        color: grey;
        font-weight: bold;
        font-family: "Andale Mono";
        font-size: 90%;
        text-shadow: 0.5px 0.5px grey;
    }
    nav {
        background-color:#B3D8D6;
      }

      
    .nav-item > a:hover {
        color: white;
    }

    .nav-item > a:active {
        color: red;
      }

    .center-block {
        float:left;
        text-align:center; 
        position: absolute;
        line-height: 300%;
        top: 38%;
        -ms-transform: translateX(+10%);
        transform: translateX(+15%);
    }
    
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        min-height: 100vh !important;
        z-index: 100;
        padding: 48px 0 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
`;

export const Navigation = (props) => (
    <Styles>
        <Navbar expand = "lg">
            <div className="sidebar-sticky"></div>
            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className="col-md-12 d-none d-md-block sidebar ">
                    <div class = "span12 center-block">
                        <Nav.Item active><Link to="home" smooth = {true} duration = {1000}>WELCOME</Link></Nav.Item>
                        <Nav.Item><Link class = "js-scroll-trigger" to="about" smooth = {true} duration = {1000}>ABOUT ME</Link></Nav.Item>
                        <Nav.Item><Link to="experience" smooth = {true} duration = {1000}>EXPERIENCES</Link></Nav.Item>
                        <Nav.Item><Link to="experience" smooth = {true} duration = {1000}>SKILLS</Link></Nav.Item>
                        <Nav.Item><Link to="experience" smooth = {true} duration = {1000}>INTERESTS</Link></Nav.Item>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)