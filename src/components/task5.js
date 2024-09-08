import React from "react";
import './stylesheet/task5.css'
import obstacle from './images/obstacle.mp4'
import { Link } from "react-router-dom";

const Task5 = () => {
    return (
        // <div className="task">
        //     <div className="head">Obstacle Test</div>
        //     <div className="content-container">
        //         <div className="info-b1">
        //             <div className="info-title">
        //                 <span>Instructions</span>
        //             </div>
        //             <div class="info-list">
        //          <div class="info">1. &nbsp;Use the <b>left</b> and <b>right</b> arrow keys to switch lanes.</div>
        //          <div class="info">2. There are three rounds of the test, each with a higher <span className="left">level of difficulty.</span></div>
        //          <div class="info">3. The maximum score for each round is <b>15 car passes</b>.</div>
        //          <div class="info">4. Earn points for each car passed safely without any <span className="left">collisions.</span></div>
        //          <div class="info">5. Drive safely by anticipating car speed and distance.</div>
        //      </div>
        //             <div class="buttons">
        //                 <a href="http://127.0.0.1:5504/Obstacle_Fronted/index.html"><button class="restart">Continue</button></a>
        //             </div>
        //         </div>
        //         <div className="video-container">
        //             <video
        //                 className="video"
        //                 src={obstacle} // Path to your video file
        //                 width="600"
        //                 height="300"
        //                 controls
        //                 autoPlay
        //                 muted
        //             />
        //             <p>We recommend that you look at the test demo.</p>
        //         </div>
        //     </div>
        // </div>
        <div className="task">
            <div className="head">Obstacle Test</div>
            <div className="content-container">
                <div className="info-b0">
                    <div className="info-title">
                        <span>Instructions</span>
                    </div>
                    <div className="info-list">
                        <div class="info">1. &nbsp;Use the <b>left</b> and <b>right</b> arrow keys to switch lanes.</div>
                        <div class="info">2. The test is divided into <b>three</b> rounds, each more difficult<span className="left">than the previous.</span></div>
                        <div class="info">3. The maximum score for each round is <b>15 car passes</b>.</div>
                        <div class="info">4. Earn points for each car passed safely without any <span className="left">collisions.</span></div>
                        <div className="info">
                            5. We recommend that you look at the test demo below.
                        </div>
                        <div class="info">6. Drive safely by anticipating car speed and distance.</div>
                    </div>
                    <div className="buttons">

                    </div>
                </div>
                <div className="video-contain">
                    <video
                        className="video"
                        src={obstacle}
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

                <Link to='http://127.0.0.1:5504/Obstacle_Fronted/index.html' className='btn'>Continue</Link>

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
    )
}





export default Task5;