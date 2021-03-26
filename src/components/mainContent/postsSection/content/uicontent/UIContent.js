import React from "react";
import "./UIContent.css";
import UIContentData from "../../../../data/UIContentData";

const UIContent = ({ value }) => {
  const displayContent = UIContentData.find((obj) => obj.titleId === value);
  const { title, imagelink } = displayContent;

  return (
    <div>
      <h3 className="uicontent-title">{title}</h3>
      <div className="uidesign-mockup">
        <img src={imagelink} alt="" />
      </div>
    </div>
  );
};

export default UIContent;
