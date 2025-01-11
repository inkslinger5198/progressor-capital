import React from "react";
import "../../../Pages/hero.css";
import Navbar from "../../../components/navbar/Navbar";
import vid from "../../../assets/background/vid.mp4";
import { Link } from "react-scroll";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const hero = () => {
  return (
    <div className="hero-container">
      <video
        className="background-video"
        src={vid}
        autoPlay
        loop
        muted
        playsInline
        width={"100%"}
      >
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <Navbar />
        <div className="hero-headings">
          <h1>PROGRESSOR CAPITAL</h1>
          <h5>Strategic Capital Advisors & Growth Partners</h5>
          <p>Forging Elite Networks for Visionary Leaders </p>
          <Link to ="about" smooth={true} duration={1000}>
            <div className="content-cta">
              <div className="content-cta-icon"><MdOutlineKeyboardDoubleArrowRight className="hero-arrow" /></div>
              <div className="content-cta-text"><div>Our Expertise</div></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default hero;
