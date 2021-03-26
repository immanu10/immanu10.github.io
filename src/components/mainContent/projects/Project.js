import React from "react";
import "./Project.css";

const Project = ({ name, description, image, demolink, codelink }) => {
  return (
    <div className="project-card">
      <div className="project-bgimg">
        <img src={image} alt="" className="project-img" />
      </div>
      <h2 className="project-title">{name}</h2>
      <p className="project-desc">{description}</p>
      <div className="project-link">
        {demolink && (
          <a target="_blank" rel="noreferrer" href={demolink}>
            View
          </a>
        )}
        <a target="_blank" rel="noreferrer" href={codelink}>
          Source code
        </a>
      </div>
    </div>
  );
};

export default Project;
