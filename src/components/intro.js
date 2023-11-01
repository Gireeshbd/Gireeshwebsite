import React, { useEffect, useState } from "react";
import "../CSS/intro.css";
import Hero from "../assets/gireeshee.png";
const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // /window.innerHeight
  return (
    <div className="light-tan-background">
      <div
        className="hey-i-gireesh  scrolled"
        style={{
          transform: `translateY(-40px)`,
          opacity: 1,
        }}
      >
        <div className="w-row">
          <div className="intro-content">
            <h6>Heya!</h6>
            <h2 className="headline">I'm Gireesh</h2>
            <p className="intro-p">
              A software engineer, and reads books related to finance and share
              my knowledge along the way, in social media platforms like
              LinkedIn and twitter, to stay updated in finance follow me
            </p>
            <h6 className="message">👋 Text me! +91 7702086232</h6>
          </div>
        </div>
        <div className="image">
          <img alt="hero" src={Hero} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
