import React from 'react';
import sample from './images/video.mp4'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import './stylesheet/home.css';

const Home = () => {
  return (
    <div className="home">
      <video className="background-video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div class="content">
        <h1>
        <ReactTyped strings={["ReactSafe"]} 
         typeSpeed={160}
         backSpeed={100}
         cursorChar="|"
         showCursor={true} /></h1>
        {/* <Link to="http://127.0.0.1:5505/" class="btn">Get Started</Link > */}

        <Link to='/about' className='btn'>Get Started</Link>
      </div>
    </div>
  );
};

export default Home;