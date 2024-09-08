import React from 'react';
import work from './images/test.png'
import score from './images/score.png'
import intro from './images/intro.png'
import './stylesheet/precision.css';
import precision from './images/precision.mp4'
import {MovingComponent} from "react-moving-text"
import { Link } from 'react-router-dom';


const Precision = () => {
    return (
        <>
       <div className="bac">
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
  Precision Timer Challenge
</MovingComponent></h1>
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
        <p>This test aims to improve drivers' timing abilities by assessing precision, which is crucial for maintaining control and safety on the road.</p>
       
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
        <p>Enhance your accuracy in driving with our Precision Timer Challenge by stopping the timer precisely at target.
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
        <p>Get personalized feedback on your timing skills. Improve precision for safer and more confident driving.</p>
      </div>
    </div>
</div>
{/* 
<div className='vid'>
  <div className="center">
<video src={precision} width="600" height="300" controls="controls" autoplay="true" muted = "true" />
<p>We recommend that you look at the test demo.</p>
  </div>

</div> */}


<div className='next'>

<Link to='/task3' className='btn'>Continue</Link>

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

export default Precision;