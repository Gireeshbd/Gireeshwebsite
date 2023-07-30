import * as React from "react";

import { HeroImage } from "../images/hero-blog.jpeg";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import MainHero from "../components/MainHero";
import Intro from "../components/intro";
import BlogHome from "../components/BlogHome";
import PreLoader from "../components/Preloader";
import { useState, useEffect } from "react";
import "../CSS/index.css";
const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API call or resource loading)
    // Replace the following setTimeout with your actual loading logic
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 3-second loading time
  }, []);
  return (
    <Layout>
      <MainHero />
      <Intro />
      <div className="Home-wrapper">
        <div className="home-left">
          <h1 className="home-leftHeading">
            The <span>freedom</span> to get the best out of your life
          </h1>
          <h3 className="home-subHeading">
            Build experiences that drive your business forward with the
            composable content platform
          </h3>
          <div className="home-buttons">
            <span>
              <button className="home-signup">Sign up free</button>
            </span>
            <span>
              <button className="home-getDemo">Get a Demo</button>
            </span>
          </div>
        </div>

        <BlogHome />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default HomePage;
