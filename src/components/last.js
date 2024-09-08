import React from 'react';
import OurCreativeMind from './stylesheet/creative.js';
import './stylesheet/last.css'
import { ReactTyped } from "react-typed";
import lastvi from './images/lastvi.mp4'

// import Contact from './stylesheet/message.js';
// import Footer from './footer.js';
function LastPage() {

  return (
    <>
      <nav className="navbar">
        <h2 className="logo"><a href="/">ReactSafe</a></h2>
        <input type="checkbox" id="menu-toggler" />
        <label htmlFor="menu-toggler" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
          </svg>
        </label>
        <ul className="all-links">
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      {/* <div className="backg">
        <div className="co">
          <h1 className='tit'>Thank you for{" "}
      </h1>
      <h1 className='tit'>
      Participating.
      </h1> */}
       <div className="home">
      <video className="background-video" autoPlay loop muted>
        <source src={lastvi} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div class="content">
      <h1 className='tit'>Thank you for your{" "}</h1>
      <h1 className='tit'>{" "}&nbsp;<ReactTyped strings={["Participation"]} 
         typeSpeed={100}
         backSpeed={100}
         cursorChar="|"
         showCursor={true} />
         </h1>

        {/* <Link to="http://127.0.0.1:5505/" class="btn">Get Started</Link > */}

        {/* <Link to='/about' className='btn'>Get Started</Link> */}
      </div>
    </div>
         {/* <h1 className='tit'>{" "}<ReactTyped strings={[" Participating."]} 
         typeSpeed={300}
         backSpeed={100}
         cursorChar="|"
         showCursor={true} />
         </h1> */}
          {/* <a href='http://localhost:3000/task1'>
            <button className="continue-button">Continue</button>
            </a>     */}
        {/* </div>
      </div> */}
      {/* <MissionSection /> */}
      <OurCreativeMind />
      {/* <Footer/> */}
      
    
      {/* <h1 className="bg-dark text-center text-white mb-0 pt-4">Contact Us</h1> */}
      <footer className="d-flex flex-column justify-content-center align-items-center bg-dark text-center text-white">
        <h1 className='underline underline-offset-4 text-4xl font-bold mt-3'>Contact Us</h1>
        {/* Grid container */}
        <div className="d-flex flex-row justify-content-around align-items-center">
          {/* Section: Social media */}
          <section className="mb-2 mt-8">      
          <a className="btn btn-outline-light btn-floating m-3 mx-4" href="mailto:pareshjaisinghani882@gmail.com?subject=Hello%20There&body=This%20is%20the%20body%20of%20the%20email"target="_blank" role="button">
      <i className="fas fa-envelope"></i>
    </a>

            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-3 mx-4" href="https://www.instagram.com/p.a.r.e.s.h_24_/?next=%2F&hl=en" target="_blank" role="button">
              <i className="fab fa-instagram"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-3 mx-4" href="/" role="button">
      <i className="fas fa-home"></i>
    </a>

            {/* Linkedin */}
            <a className="btn btn-outline-light btn-floating m-3 mx-4" href="https://www.linkedin.com/in/paresh-jaisinghani-499950280/" target="_blank" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* Github */}
            <a className="btn btn-outline-light btn-floating m-3 mx-4" href="https://github.com/Paresh8890-Jaisinghani" target="_blank" role="button">
              <i className="fab fa-github"></i>
            </a>

          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        {/* <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      <div className="text-center text-md-left mb-3 mb-md-0">
        Copyright © 2024 All Rights Reserved
      </div>
      <a className="text-white" style={{ fontSize: '20px' }} href="/">ReactSafe</a>
    </div> */}
        {/* Copyright */}
      </footer>
    </>
  );
}

export default LastPage;
