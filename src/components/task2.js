import React from "react";
import { Link } from "react-router-dom";
import "./stylesheet/task2.css"; // Update the CSS file name if necessary
import quiz from "./images/quiz1.mp4"; // Replace with your video file path

const Task2 = () => {
  return (
    // <div className="task">
    //   <div className="head">Rapid Quiz</div>
    //   <div className="content-container">
    //     <div className="info-box">
    //       <div className="info-title">
    //         <span>Instructions</span>
    //       </div>
    //       <div className="info-list">
    //         <div className="info">
    //           1. You will have <b>15 seconds</b> for each question.
    //         </div>
    //         <div className="info">
    //           2. Once you select your answer, it can't be changed.
    //         </div>
    //         <div className="info">
    //           3. You can't select any option once the time is up.
    //         </div>
    //         <div className="info">
    //           4. You'll get points on the basis of your correct answers.
    //         </div>
    //         <div className="info">5. Good luck! For the test.</div>
    //       </div>
    //       <div className="buttons">
    //         <a href="http://127.0.0.1:5501/Quiz_Fronted/index.html">
    //           <button className="restart">Continue</button>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="video-co">
    //       <video
    //         className="video"
    //         src={quiz} // Path to your video file
    //         width="600"
    //         height="300"
    //         controls
    //         autoPlay
    //         muted
    //       />
    //       <p>We recommend that you look at the test demo.</p>
    //     </div>
    //   </div>
    // </div>
    <div className="task">
    <div className="head">Traffic Sign Quiz</div>
    <div className="content-container">
      <div className="info-b0">
        <div className="info-title">
          <span>Instructions</span>
        </div>
        <div className="info-list">
          <div className="info">
          1. You will have <b>15 seconds</b> for each question.
          </div>
          <div className="info">
          2. Once you select your answer, it can't be changed.
          </div>
          <div className="info">
          3. You'll get points on the basis of your correct answers.
          </div>
          <div className="info">
          4. We recommend that you look at the test demo below.
          </div>
          <div className="info">
          5. Good luck! For the test.
          </div>
        </div>
        <div className="buttons">
         
        </div>
      </div>
      <div className="video-contain">
        <video
          className="video"
          src={quiz}
          width="600"
          height="300"
          controls
          autoPlay
          muted
        />
        {/* <p>We recommend that you look at the test demo.</p> */}
      </div>
    </div>


<div className='next'>

<Link to='http://127.0.0.1:5501/Quiz_Fronted/index.html' className='btn'>Continue</Link>

</div>    

<footer>
      <div>
          <span>Copyright © 2024 All Rights Reserved</span>
          <span className="link">
              <a href="/">Home</a>
          </span>
      </div>
  </footer>
  
  </div>
  );
};

export default Task2;
