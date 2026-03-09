import React from "react";
import PageHero from "@/components/sections/global/PageHero";
import AboutIntroduction from "@/components/sections/pages/about/AboutIntroduction";
import MissionVision from "@/components/sections/pages/about/MissionVision";
import OurValues from "@/components/sections/pages/about/OurValues";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <>
    <Navbar />
      {/* Reusable Hero Section */}
    <PageHero
  currentPage="About Us"
/>

      {/* About Introduction Section */}
      <AboutIntroduction />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Our Values Section */}
      <OurValues />

      <Footer />
    </>
  );
};

export default AboutPage;