import React from "react";
import "./stylesheet/footer.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer ">
			
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
						<h5>IIT Hyderabad , India</h5>
					</div>
					<div className="Contact">
						<FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
						<h5>+919376491531</h5>
					</div>
					<div className="Mail">
						<FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
						<h5>pareshjaisinghani882@gmail.com</h5>
					</div>
				</div>
				{/* <div className="right">
					<p>Hope you are having a  lovely day</p>
					<p >Created by <span className="color">Paresh</span> || <span className="color">Siddharth</span>|| <span className="color">Lakshya</span></p>
				</div> */}
			</div>
		</div>
	)
}

export default Footer;