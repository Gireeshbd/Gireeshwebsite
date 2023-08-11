import React, { useEffect, useState } from "react";
import "../CSS/intro.css";
import Hero from "../assets/hero.png";
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
              👋 Hey there! I'm all about building boring businesses (just
              kidding, they're actually super cool!). 🏢 Currently, I'm based in
              Chittoor, spreading the magic of entrepreneurship! 💼 But wait,
              that's not all. I'm having a blast 🎉 building it up, and I'm
              always on the lookout for new exciting possibilities in life! 🌟
              Pushing my limits is my jam, and I've made it a habit over time!
              💪 So, if you're up for some wild fun and exploring new horizons,
              what are you waiting for? 🚀
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
