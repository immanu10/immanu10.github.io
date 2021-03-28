import React from "react";
import "./Content.css";
import ContentData from "../../../data/ContentData";

const Content = ({ value }) => {
  const displayContent = ContentData.find((obj) => obj.titleId === value);
  const { title, explaination, input, output, codeString } = displayContent;

  return (
    <>
      <h3 className="post-title">{title}</h3>
      <div className="post-content">
        <div className="question">
          <p>{explaination}</p>
          <p style={{ fontWeight: 600, color: "#c9d1d9" }}>Example</p>
          <code className="output-example">
            Input: {input}
            <br />
            Output: {output}
            <br />
          </code>
        </div>
        <div className="solution-container">
          <code>
            <pre className="solution-code">{codeString}</pre>
          </code>
        </div>
      </div>
    </>
  );
};

export default Content;
