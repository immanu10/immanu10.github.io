import React from "react";

import Aboutme from "../timelineCard/Aboutme";
import EduOrExp from "../timelineCard/EduOrExp";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <EduOrExp
        title="SDE Intern at"
        link="https://www.ahalytix.com/"
        name="Ahalytix"
        timeline="2021-Present"
        months="1 mos"
        logoimg=""
      />
      <EduOrExp
        title="Grad BE (CSE) from"
        link="https://sjbit.edu.in/"
        name="SJB Institute of Technology"
        timeline="2017-Present"
        logoimg="images/sjbitLogo.jpg"
      />
      <Aboutme />
    </div>
  );
};

export default About;
