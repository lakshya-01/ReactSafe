// About.js
import React, { useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './stylesheet/about.css'
import reaction  from './images/reaction.jpg'
import  obstacle from './images/obstacle.jpg'
import trafficlight from './images/trafficlight.jpg'
import quiz from  './images/quiz.jpg'
import precision from './images/precision.jpg'
import {ReactTyped} from "react-typed";


const About = () => {
  useEffect(() => {
    new Swiper('.slide-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 3,
        },
      },
    });
  }, []);


  return (
    <div>
      <nav className="navbar py-3">
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
          <li><a href="/contact">Register</a></li>
        </ul>
      </nav>

      <header>
        <section className="homepage" id="home">
          <div className="conte">
            <div className="text">
              <h1>Promoting Road Safety Through{" "}</h1>
              <h1><ReactTyped
          strings={["Testing", "Evaluation","Feedback"]}
          typeSpeed={100}
          loop
          backSpeed={50}
          cursorChar="|"
          showCursor={true}
        /></h1>
            </div>
            <div className='regi'>
            <a href="/contact">Registration Form -&gt;</a>
            </div>
          </div>
        </section>
      </header>

      <div className="slider">
        <div className="container swiper">
          <div className="slide-container">
            <div className="card-wrapper swiper-wrapper">
              <div className="card swiper-slide">
                <div className="image-box">
                  <img src={reaction} alt="Reaction Time Test" />
                </div>
                <div className="profile-details">
                  <div className="name-job">
                    <h3 className="name">Reaction Time Test</h3>
                  </div>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-box">
                  <img src={quiz} alt="Rapid Quiz" />
                </div>
                <div className="profile-details">
                  <div className="name-job">
                    <h3 className="name">Traffic Sign Quiz</h3>
                  </div>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-box">
                  <img src={precision} alt="Precision Timer Challenge" />
                </div>
                <div className="profile-details">
                  <div className="name-job">
                    <h3 className="name">Precision Timer Challenge</h3>
                  </div>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-box">
                  <img src={trafficlight} alt="Traffic Light Simulation" />
                </div>
                <div className="profile-details">
                  <div className="name-job">
                    <h3 className="name">Traffic Light Simulation</h3>
                  </div>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-box">
                  <img src={obstacle} alt="Obstacle Test" />
                </div>
                <div className="profile-details">
                  <div className="name-job">
                    <h3 className="name">Obstacle Test</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next swiper-navBtn"></div>
          <div className="swiper-button-prev swiper-navBtn"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <section className="services" id="services">
        <h2>Driver Skill Assessments</h2>
        <ul className="cards">
          <li className="card">
            <h3>Reaction Time Test</h3>
            <p>• Measures reaction time to prevent <span className='left'>accidents.</span></p>
            <p>• Determines drivers' ability to react <span className='left'>quickly.</span></p>
            <p>• Improves driving skills and safety.</p>
          </li>
          <li className="card">
            <h3>Traffic Sign Quiz</h3>
            <p>• Tests drivers' knowledge of traffic signals <span className='left'> and signs.</span></p>
            <p>• Help drivers understand and remember <span className='left'>traffic rules.</span></p>
            <p>• Promotes safer driving and reduces <span className='left'>accidents.</span></p>
          </li>
          <li className="card">
            <h3>Precision Timer Challenge</h3>
            <p>• Improves control and decision-making <span className='left'>skills.</span> </p>
            <p>• Promotes quick responses and driving <span className='left'>skills.</span></p>
            <p>• Allows safer and more confident <span className='left'>driving.</span></p>
          </li>
          <li className="card">
            <h3>Traffic Light Simulation</h3>
            <p>• Tests your reaction to changing traffic<span className='left'> signals.</span></p>
            <p>• Improves awareness, reactions, and <span className='left'>control.</span></p>
            <p>• Promotes quick thinking and precision.</p>
          </li>
          <li className="card">
            <h3>Obstacle Test</h3>
            <p>• Challenges drivers to navigate while<span className='left'> maintaining speed.</span></p>
            <p>• Enhances awareness, reflexes, and <span className='left'>control.</span></p>
            <p>• Prepares drivers for unexpected road <span className='left'>situations.</span></p>
          </li>
        </ul>
      </section>

      <footer>
        <div>
          <span>Copyright © 2024 All Rights Reserved</span>
          <span className="link">
            <a href="/contact">Register</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default About;
