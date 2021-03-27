import React from "react";
import "./Footer.css";
import socialLinks from "../../data/SocialLinks";

const Footer = () => {
  return (
    <>
      <ul className="footer-list">
        {socialLinks.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.name}
                <svg
                  viewBox={item.viewBox ? item.viewBox : "0 0 24 24"}
                  className="icon"
                >
                  <path d={item.d}></path>
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Footer;
