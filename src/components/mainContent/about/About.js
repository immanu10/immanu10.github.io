import React from "react";

import Aboutme from "../timelineCard/Aboutme";
import EduOrExp from "../timelineCard/EduOrExp";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <EduOrExp
        title="SDE Intern at"
        link="https://www.tuzo.ai/"
        name="Tuzo"
        timeline="2021-Present"
        months="3 mos"
        logoimg=""
      />
      <EduOrExp
        title="Grad BE (CSE) from"
        link="https://sjbit.edu.in/"
        name="SJB Institute of Technology"
        timeline="2017-2021"
        logoimg="images/sjbitLogo.jpg"
      />
      <Aboutme />
    </div>
  );
};

export default About;
