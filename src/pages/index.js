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
import ContactUs from "../components/Contact";
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

      <BlogHome />
      <ContactUs />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default HomePage;
