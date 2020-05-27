import React from 'react'
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Styles = styled.div`
.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  
  .sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .sidebar a:hover {
    color: #f1f1f1;
  }
  
  .sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  #icon {
    z-index: 100;
    position: relative;   
    padding-right: 5px; 
  }
  
`;

export const Icons = () => (
  <Styles>
    <a id="icon"><SocialIcon url="https://github.com/WasifButt" target="_blank" bgColor="black" fgColor = "white" style={{ paddingLeft: "50" }}/></a>
    <a id="icon"><SocialIcon url="https://www.linkedin.com/in/buttwasif/" target="_blank" bgColor="black" fgColor = "white"/></a>
    <a id="icon"><SocialIcon url="https://www.facebook.com/wasif.a.butt.9" target="_blank" bgColor="black" fgColor = "white"/></a>
    <a id="icon"><SocialIcon url="https://www.instagram.com/instawab/?hl=en" target="_blank" bgColor="black" fgColor = "white"/></a>
    <a id="icon"><SocialIcon url="https://drive.google.com/file/d/1RmlibKSV4RbnYVSbhNpS5GpJSBtB7xVk/view?usp=sharing" network="sharethis" id="icon" target="_blank" bgColor="black" fgColor = "white"/></a>
  </Styles>
)

export const Contact = () => (
  <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">yeet</a>
  </div>
)