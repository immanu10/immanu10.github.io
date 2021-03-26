import React from "react";
import "./Footer.css";

const socialLinks = [
  {
    id: 1,
    name: "Resume",
    icon: "/icons/cv.png",
    link:
      "https://drive.google.com/file/d/1ThX8SM-FXK1FX37V-jFLvMFOR-irGTC7/view?usp=sharing",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/immanu10/",
  },
  {
    id: 3,
    name: "Github",
    icon: "/icons/github.svg",
    link: "https://github.com/immanu10",
  },
  {
    id: 4,
    name: "Mail",
    icon: "/icons/gmail.svg",
    link: "mailto:manojmanu59281052@gmail.com",
  },
];

const Footer = () => {
  return (
    <>
      <ul className="footer-list">
        {socialLinks.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.name} <img src={item.icon} alt="icon" className="icon" />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Footer;
