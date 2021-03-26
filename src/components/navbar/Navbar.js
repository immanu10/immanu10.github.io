import React, { useState } from "react";
import About from "../mainContent/about/About";
import Project from "../mainContent/projects/Project";
import ProjectData from "../data/ProjectData";
import NavbarList from "../data/NavbarList";
import "./Navbar.css";
import PostSection from "../mainContent/postsSection/PostSection";
import Contact from "../mainContent/contact/Contact";

const Navbar = () => {
  const [navValue, setNavValue] = useState("about");
  const [active, setActive] = useState(0);
  return (
    <div className="nav-content">
      <div className="btn-container">
        {NavbarList.map((list, index) => {
          return (
            <button
              key={list.id}
              value={list.name}
              onClick={(e) => {
                setNavValue(e.target.value);
                setActive(index);
              }}
              className={`nav-button ${index === active && "active-btn"}`}
            >
              {list.name}
            </button>
          );
        })}
      </div>

      <div>
        {navValue === "about" && <About />}
        {navValue === "projects" && (
          <div className="projects">
            {ProjectData.map(
              ({ id, name, description, image, demolink, codelink }) => {
                return (
                  <Project
                    key={id}
                    name={name}
                    description={description}
                    image={image}
                    demolink={demolink}
                    codelink={codelink}
                  />
                );
              }
            )}
          </div>
        )}
        {navValue === "posts" && <PostSection />}
        {navValue === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default Navbar;
