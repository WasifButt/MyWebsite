import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-scroll';
import Particles from 'react-particles-js';

const Styles = styled.div`
    background-color:#B3D8D6; 
    padding-left: 10%;   
    
    .navbar-nav, .navbar-link {
        color: grey;
        font-weight: bold;
        font-family: "Andale Mono";
        font-size: 90%;
        text-shadow: 0.5px 0.5px grey;
    }

    .navbar-brand {
        position:absolute; 
        top:0; 
        left:0;
        padding-left: 1%;
        font-size:125%;
        display: inline-block;
        transform: scale(1, 1.5);
        -webkit-transform: scale(1, 1.5); /* Safari and Chrome */
        -moz-transform: scale(1, 1.5); /* Firefox */
        -ms-transform: scale(1, 1.5); /* IE 9+ */
        -o-transform: scale(1, 1.5); /* Opera */
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
        <Navbar expand="lg">
            <div className="sidebar-sticky"></div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="col-md-12 d-none d-md-block sidebar">
                    <a class="navbar-brand">Wasif Butt</a>
                    <Particles
                        height="1000px"
                        width="11%"
                        params={{
                            "absorbers": [],
                            "detectRetina": true,
                            "emitters": [],
                            "fpsLimit": 60,
                            "infection": {
                                "cure": false,
                                "delay": 0,
                                "enable": false,
                                "infections": 0,
                                "stages": []
                            },
                            "interactivity": {
                                "detectsOn": "canvas",
                                "events": {
                                    "onClick": {
                                        "enable": true,
                                        "mode": "push"
                                    },
                                    "onHover": {
                                        "enable": true,
                                        "mode": "grab",
                                        "parallax": {
                                            "enable": true,
                                            "force": 60,
                                            "smooth": 10
                                        }
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "absorbers": [],
                                    "bubble": {
                                        "distance": 400,
                                        "duration": 2,
                                        "opacity": 0.8,
                                        "size": 40
                                    },
                                    "connect": {
                                        "distance": 80,
                                        "lineLinked": {
                                            "opacity": 0.5
                                        },
                                        "radius": 60
                                    },
                                    "emitters": [],
                                    "grab": {
                                        "distance": 400,
                                        "lineLinked": {
                                            "opacity": 1
                                        }
                                    },
                                    "push": {
                                        "quantity": 4
                                    },
                                    "remove": {
                                        "quantity": 2
                                    },
                                    "repulse": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "speed": 1
                                    },
                                    "slow": {
                                        "factor": 3,
                                        "radius": 200
                                    }
                                }
                            },
                            "particles": {
                                "collisions": {
                                    "enable": false,
                                    "mode": "bounce"
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "lineLinked": {
                                    "blink": false,
                                    "color": {
                                        "value": "#ffffff"
                                    },
                                    "consent": false,
                                    "distance": 150,
                                    "enable": true,
                                    "opacity": 0.4,
                                    "shadow": {
                                        "blur": 5,
                                        "color": {
                                            "value": "lime"
                                        },
                                        "enable": false
                                    },
                                    "width": 1
                                },
                                "move": {
                                    "attract": {
                                        "enable": true,
                                        "rotate": {
                                            "x": 600,
                                            "y": 1200
                                        }
                                    },
                                    "direction": "none",
                                    "enable": true,
                                },
                                "number": {
                                    "density": {
                                        "enable": true,
                                        "area": 800,
                                        "factor": 1000
                                    },
                                    "limit": 0,
                                    "value": 200
                                },
                                "opacity": {
                                    "animation": {
                                        "enable": true,
                                        "minimumValue": 0.1,
                                        "speed": 3,
                                        "sync": false
                                    },
                                    "random": {
                                        "enable": true,
                                        "minimumValue": 1
                                    },
                                    "value": 0.5
                                },
                                "shape": {
                                    "options": {
                                        "character": {
                                            "fill": true,
                                            "close": true,
                                            "font": "Verdana",
                                            "style": "",
                                            "value": "*",
                                            "weight": "400"
                                        },
                                        "char": {
                                            "fill": true,
                                            "close": true,
                                            "font": "Verdana",
                                            "style": "",
                                            "value": "*",
                                            "weight": "400"
                                        },
                                        "image": {
                                            "fill": true,
                                            "close": true,
                                            "height": 100,
                                            "replaceColor": true,
                                            "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                                            "width": 100
                                        },
                                        "images": {
                                            "fill": true,
                                            "close": true,
                                            "height": 100,
                                            "replaceColor": true,
                                            "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                                            "width": 100
                                        },
                                        "polygon": {
                                            "fill": true,
                                            "close": true,
                                            "sides": 5
                                        },
                                        "star": {
                                            "fill": true,
                                            "close": true,
                                            "sides": 5
                                        }
                                    },
                                    "type": "circle"
                                },
                                "size": {
                                    "animation": {
                                        "destroy": "none",
                                        "enable": true,
                                        "minimumValue": 0.1,
                                        "speed": 20,
                                        "startValue": "max",
                                        "sync": false
                                    },
                                    "random": {
                                        "enable": true,
                                        "minimumValue": 1
                                    },
                                    "value": 20
                                },
                                "stroke": {
                                    "color": {
                                        "value": "#000000"
                                    },
                                    "width": 0,
                                    "opacity": 1
                                },
                            },
                            "pauseOnBlur": true,
                        }}
                    />
                    <div class="span12 center-block">
                        <Nav.Item active><Link to="home" smooth={true} duration={1000}>WELCOME</Link></Nav.Item>
                        <Nav.Item><Link class="js-scroll-trigger" to="about" smooth={true} duration={1000}>ABOUT ME</Link></Nav.Item>
                        <Nav.Item><Link to="experience" smooth={true} duration={1000}>EXPERIENCES</Link></Nav.Item>
                        <Nav.Item><Link to="experience" smooth={true} duration={1000}>SKILLS</Link></Nav.Item>
                        <Nav.Item><Link to="experience" smooth={true} duration={1000}>INTERESTS</Link></Nav.Item>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)