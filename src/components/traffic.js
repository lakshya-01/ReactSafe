import React from 'react';
import work from './images/test.png'
import score from './images/score.png'
import intro from './images/intro.png'
import './stylesheet/traffic.css';
import traffic from './images/traffic.mp4'
import { Link } from 'react-router-dom';
import { MovingComponent } from "react-moving-text"


const Traffic = () => {
  return (
    <>
      <div className="ba">
        <div className="content">
          <h1 className="title">
            <MovingComponent
              type="fadeIn"
              duration="1600ms"
              delay="0s"
              direction="normal"
              timing="linear"
              iteration="1"
              fillMode="none">
              Traffic Light Simulation
            </MovingComponent>

          </h1>
          {/* <a href='http://localhost:3000/task1'>
            <button className="continue-button">Continue</button>
            </a>     */}
        </div>
      </div>

      <div className="col">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column align-items-center  text-center">
            <img
              src={score}
              alt="Placeholder"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal mt-4">About</h2>
            <p>This test aims to teach drivers how to quickly recognize and respond to green signals, which is crucial for promoting safe and effective traffic navigation.</p>

          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center text-center">
            <img
              src={work}
              alt="Placeholder"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal mt-4">Test</h2>
            <p>Enhance your driving awareness with our Traffic Light Simulation test by reacting precisely when the green signal appears.
            </p>

          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center text-center">
            <img
              src={intro}
              alt="Placeholder"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal mt-4">Feedback</h2>
            <p>Get personalized feedback on your signal response. Improve reaction time for safer and more confident driving.</p>
          </div>
        </div>
      </div>

      {/* <div className='vid'>
  <div className="center">
<video src={traffic} width="600" height="300" controls="controls" autoplay="true" muted = "true" />
<p>We recommend that you look at the test demo.</p>
  </div>

</div> */}


      <div className='next'>

        <Link to='/task4' className='btn'>Continue</Link>

      </div>

      <footer>
        <div>
          <span>Copyright © 2024 All Rights Reserved</span>
          <span className="link">
            <a href="/">Home</a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Traffic;