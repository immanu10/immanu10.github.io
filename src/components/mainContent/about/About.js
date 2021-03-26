import React from "react";

import Aboutme from "../timelineCard/Aboutme";
import Education from "../timelineCard/Education";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Education />
      <Aboutme />
    </div>
  );
};

export default About;
