import React from "react";
import "./TimelineCard.css";

const Education = () => {
  return (
    <div className="timeline-card edu-card">
      <div className="edu-details">
        <p>
          Grad BE (CSE) from
          <a href="https://sjbit.edu.in/" target="_blank" rel="noreferrer">
            SJB Institute of Technology
          </a>
          <span>(2017-Present)</span>
        </p>
      </div>
      <img src="images/sjbitLogo.jpg" alt="" className="logo" />
    </div>
  );
};

export default Education;
