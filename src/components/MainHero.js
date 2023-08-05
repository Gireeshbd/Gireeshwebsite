import * as React from "react";
import { useEffect, useState } from "react";
import "../CSS/mainHero.css";
import Location from "../assets/location.svg";
const MainHero = () => {
  const [scrollValue, setScrollValue] = useState(0);

  // Update scroll value on scrolling
  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="heroContainer">
      <div className="inside-container">
        <div className="background-elements">
          <div
            className="rectangle rect1"
            style={{
              opacity: 1 - scrollValue * 0.01,
              top: `${30 - scrollValue * 0.05}%`,
              left: `${25 - scrollValue * 0.05}%`,
            }}
          ></div>
          <div
            className="rectangle rect2"
            style={{
              opacity: 1 - scrollValue * 0.006,
              top: `${35 - scrollValue * 0.06}%`,
              right: `${20 - scrollValue * 0.05}%`,
            }}
          ></div>
          <div
            className="rectangle rect3"
            style={{
              opacity: 1 - scrollValue * 0.007,
              bottom: `${50 - scrollValue * 0.07}%`,
              left: `${20 - scrollValue * 0.06}%`,
            }}
          ></div>
          <div
            className="rectangle rect4"
            style={{
              opacity: 1 - scrollValue * 0.008,
              bottom: `${80 - scrollValue * 0.08}%`,
              right: `${20 - scrollValue * 0.06}%`,
            }}
          ></div>
          <div
            className="rectangle rect5"
            style={{
              opacity: 1 - scrollValue * 0.009,
              bottom: `${20 - scrollValue * 0.09}%`,
              left: `${20 - scrollValue * 0.07}%`,
            }}
          ></div>
          <div
            className="rectangle rect6"
            style={{
              opacity: 1 - scrollValue * 0.001,
              top: `${30 - scrollValue * 0.1}%`,
              right: `${20 - scrollValue * 0.07}%`,
            }}
          ></div>
        </div>
        <div className="text">
          <h1 className="hello">Hi, I'm Gireesh</h1>
          <div className="location">
            <img src={Location} alt="location" />
            <p>Chittoor, India</p>
          </div>
          <div className="tagline">A Software Developer</div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
