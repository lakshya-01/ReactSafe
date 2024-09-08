import React from "react";
import './stylesheet/task3.css'; // Ensure to use the correct CSS file path
import precision from './images/precision.mp4'; // Replace with your actual video import
import { Link } from "react-router-dom";

const Task3 = () => {
    return (
        // <div className="task">
        //     <div className="head">Precision Timer</div>

        //     <div className="content-container">
        //         <div className="info-bo">
        //             <div className="info-title"><span>Instructions</span></div>
        //             <div className="info-list">
        //                 <div className="info">1. Click the "Start Timer" button to start the countdown.</div>
        //                 <div className="info">2. The timer will be visible for the first <b>5 seconds</b>.</div>
        //                 <div className="info">3. After 5 seconds, the timer will be hidden but<span className="left">continue to <b>count in mind</b>.</span></div>
        //                 <div className="info">4. Click the "Stop Timer" button at the <b>target time of 10 <span className="left">seconds.</span></b></div>
        //                 <div className="info">5. Good luck and aim for precision!</div>
        //             </div>
        //             <div className="buttons">
        //                 <a href="http://127.0.0.1:5502/Precision_Fronted/index.html"><button className="restart">Continue</button></a>
        //             </div>
        //         </div>
        //         <div className="video-container">
        //             <video
        //                 className="video"
        //                 src={precision} // Replace with your video source
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
            <div className="head">Precision Timer Test</div>
            <div className="content-container">
                <div className="info-b0">
                    <div className="info-title">
                        <span>Instructions</span>
                    </div>
                    <div className="info-list">
                        <div className="info">1. Click the <b>"Start Timer"</b> button to start the countdown.</div>
                        {/* <div className="info">2. The timer will be visible for the first <b>5 seconds</b>.</div> */}
                        <div className="info">2. After 5 seconds, the timer will be hidden but<span className="left">continue to <b>count in mind</b>.</span></div>
                        <div className="info">3. Click the "Stop Timer" button at the <b>target time of 10 <span className="left">seconds.</span></b></div>
                        <div className="info">
                            4. We recommend that you look at the test demo below.
                        </div>
                        <div className="info">
                            5. Good luck, and be as accurate as possible!
                        </div>
                    </div>
                    <div className="buttons">

                    </div>
                </div>
                <div className="video-contain">
                    <video
                        className="video"
                        src={precision}
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

                <Link to='http://127.0.0.1:5502/Precision_Fronted/index.html' className='btn'>Continue</Link>

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

export default Task3;
