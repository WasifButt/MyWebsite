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
            color: red;
        }
    }
    
    .center-block {
        margin:0 auto; 
        float:left;
        text-align:left; 
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        min-height: 100vh !important;
        //z-index: 100;
        padding: 48px 0 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
    #sidebar-wrapper{
        min-height: 100vh !important;
        width: 100vw;
        margin-left: -1rem;
        -webkit-transition: margin .25s ease-out;
        -moz-transition: margin .25s ease-out;
        -o-transition: margin .25s ease-out;
        transition: margin .25s ease-out;
    }
    #sidebar-wrapper .sidebar-heading {
        padding: 0.875rem 1.25rem;
        font-size: 1.2rem;
    }
    #page-content-wrapper {
        min-width: 0;
        width: 100%;
    }
    
    
`;

export const Navigation = (props) => (
    <Styles>
        <Navbar expand = "lg">
            <div className="sidebar-sticky"></div>
            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                    <div class = "span12 center-block">
                        <Nav.Item><Link to="home" smooth = {true} duration = {1000}>Welcome</Link></Nav.Item>
                        <Nav.Item><Link to="about" smooth = {true} duration = {1000}>About Me!</Link></Nav.Item>
                        <Nav.Item><Link to="experience" smooth = {true} duration = {1000}>My Experience</Link></Nav.Item>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)