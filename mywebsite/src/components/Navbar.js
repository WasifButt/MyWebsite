import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-scroll'

const Styles = styled.div`
    .navbar {
        background-color: #FF5733;
    }

    .navbar-brand, .navbar-nav, .navbar-link {
        color: #bbb;
        &:hover {
            color: white;
        }
    }
    
`;

export const Navigation = () => (
    <Styles>
        <Navbar expand = "lg" sticky="top" >
            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "flex-column">
                    <Nav.Item><Link to="home" smooth = {true} duration = {1000}>Welcome</Link></Nav.Item>
                    <Nav.Item><Link to="about" smooth = {true} duration = {1000}>About Me!</Link></Nav.Item>
                    <Nav.Item><Link to="experience" smooth = {true} duration = {1000}>My Experience</Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)