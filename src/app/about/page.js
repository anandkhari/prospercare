import React from "react";
import PageHero from "@/components/sections/global/PageHero";
import AboutIntroduction from "@/components/sections/pages/about/AboutIntroduction";
import MissionVision from "@/components/sections/pages/about/MissionVision";
import OurValues from "@/components/sections/pages/about/OurValues";

const AboutPage = () => {
  return (
    <>
      {/* Reusable Hero Section */}
      <PageHero
        title="About us"
        bgImage="https://images.pexels.com/photos/6256013/pexels-photo-6256013.jpeg"
      />

      {/* About Introduction Section */}
      <AboutIntroduction />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Our Values Section */}
      <OurValues />
    </>
  );
};

export default AboutPage;