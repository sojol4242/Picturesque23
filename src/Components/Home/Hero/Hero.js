/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import Fade from "react-reveal/Fade";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import carousalData from "../../../StaticData/CarousalData";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_left">
          <div className="slider">
            <div className="hero-carousel">
              <div
                className="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Carousel>
                      {carousalData.map((carousal) => (
                        <Carousel.Item key={carousal._id}>
                          <img src={carousal.img} alt={carousal.title} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="red-sec hide"></div>
          <div className="lrb"></div>
          <div className="lgb"></div>
          <div className="l-box">
            <div className="s-down">
              <a href="#works">services of TracePoint</a>
            </div>

            <div className="social-wrapper">
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="intro-box">
          <div className="in-title text-uppercase  hide">
            {" "}
            <ReactTypingEffect text={["Welcome To", "TracePoint"]} />
          </div>
          <div className="in-txt text-uppercase">
            An ultimate solution of BSMRSTU Transportation
          </div>
          <div className="in-b-txt hide">
            Work around our student , teacher and stuffs
          </div>
        
            {/* <a
              href="http://localhost:3001/"
              className="button-block button-block--brand active hide"
              target="_blank"
            >
              Trace Bus
            </a> */}
            <Link to="/dashboard/map" className="button-block button-block--brand active hide">
         
            Trace Bus
         
        </Link>
        
        </div>
      </div>
    </>
  );
};

export default Hero;
{
  /*   <Carousel>
        {carousalData.map((carousal) => (
          <Carousel.Item key={carousal._id}>
            
              <div className="row hero">
                <div className="col-md-12  col-sm-12 hero-content mt-5">
                  <p className="hero-title-span">
                    <ReactTypingEffect text={["Welcome To", "Picturesque"]} />
                  </p>
                  <Fade duration={4000} left>
                    <h2 className="hero-title">{carousal.title}</h2>
                  </Fade>
                  <Fade duration={6000} bottom>
                    <p className="hero-words">{carousal.para}</p>
                  </Fade>

                  <a href="#services">
                    <motion.button
                      whileHover={{
                        scale: 1.01,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                      className="hero-btn my-5"
                    >
                      Hire us
                    </motion.button>
                  </a>
                </div>
              </div>
            
          </Carousel.Item>
        ))}
      </Carousel> */
}
