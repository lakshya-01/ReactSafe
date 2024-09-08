import React from "react";
import './stylesheet/task4.css'
import traffic from './images/traffic.mp4'
import { Link } from "react-router-dom";

const Task4 = () => {
    return (

        // <div className="task">
        //     <div className="head">Traffic Light Simulation</div>
        //     <div className="content-container">
        //         <div className="info-b">
        //             <div className="info-title">
        //                 <span>Instructions</span>
        //             </div>
        //             <div class="info-list">
        //                 <div class="info">1. Lights change at random: red, amber, and green.</div>
        //                 <div class="info">2. Press the <b>spacebar</b> or <b>"click"</b> button when the <span className="left"><b>green</b> light appears.</span></div>
        //                 <div class="info">3. Earn one point for each correct "press" or "click".</div>
        //                 <div class="info">4. Each round lasts for 10 seconds.</div>
        //                 <div className="info">5. Good luck for the test !</div>
        //             </div>
        //             <div class="buttons">
        //                 <a href="http://127.0.0.1:5503/Light_Fronted/index.html"><button class="restart">Continue</button></a>
        //             </div>
        //         </div>
        //         <div className="video-cont">
        //             <video
        //                 className="video"
        //                 src={traffic} // Path to your video file
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
            <div className="head">Traffic Light Simulation</div>
            <div className="content-container">
                <div className="info-b0">
                    <div className="info-title">
                        <span>Instructions</span>
                    </div>
                    <div className="info-list">
                        <div class="info">1. &nbsp;Lights change at random: red, amber, and green.</div>
                        <div class="info">2. Press the <b>spacebar</b> or <b>"click"</b> button when the <b>green</b> <span className="left">signal appears.</span></div>
                        <div class="info">3. Earn one point for each correct "press" or "click".</div>
                        <div class="info">4. Each round lasts for <b>15 seconds.</b></div>
                        <div class="info">5. We recommend that you look at the test demo below.</div>
                        <div className="info">6. Good luck for the test !</div>
                    </div>
                    <div className="buttons">

                    </div>
                </div>
                <div className="video-contain">
                    <video
                        className="video"
                        src={traffic}
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

                <Link to='http://127.0.0.1:5503/Light_Fronted/index.html' className='btn'>Continue</Link>

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





export default Task4;