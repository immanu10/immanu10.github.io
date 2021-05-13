import React from "react";
import "./TimelineCard.css";

const EduOrExp = ({ title, link, name, timeline, months, logoimg }) => {
  return (
    <div className="timeline-card edu-card">
      <div className="edu-details">
        <p>
          {title}
          <a href={link} target="_blank" rel="noreferrer">
            {name}
          </a>
          {months ? (
            <span>
              ({timeline}) - {months}
            </span>
          ) : (
            <span>({timeline})</span>
          )}
        </p>
      </div>
      {logoimg && <img src={logoimg} alt="" className="logo" />}
    </div>
  );
};

export default EduOrExp;
