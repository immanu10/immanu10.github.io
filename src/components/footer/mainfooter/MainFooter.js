import React from "react";
import "./MainFooter.css";
const mediaLinks = [
  {
    id: 1,
    name: "Linkedin",
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/immanu10/",
  },
  {
    id: 2,
    name: "Twitter",
    icon: "/icons/twitter.svg",
    link: "https://twitter.com/immanu10_",
  },
  {
    id: 3,
    name: "CodePen",
    icon: "/icons/codepen.svg",
    link: "https://codepen.io/immanu10",
  },
  {
    id: 4,
    name: "bit.dev",
    icon: "/icons/bit.svg",
    link: "https://bit.dev/immanu10",
  },
  {
    id: 5,
    name: "Dribble",
    icon: "/icons/dribbble.svg",
    link: "https://dribbble.com/immanu10",
  },
];

const MainFooter = () => {
  return (
    <div className="footer-container">
      <ul className="footer-links">
        {mediaLinks.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.name}{" "}
                <img src={item.icon} alt="icon" className="footer-icon" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainFooter;
