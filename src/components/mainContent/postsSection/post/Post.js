import React from "react";
import "./Post.css";

const Post = ({
  title,
  titleId,
  tags,
  mainCategory,
  subCategory,
  link,
  callbackFuction,
}) => {
  return (
    <article className="post">
      <h3 className="post-name">{title}</h3>
      <p className="post-tags">
        {tags.map((item) => {
          const id = tags.indexOf(item);
          return (
            <span
              key={id}
              className="tag"
              style={
                item === "Coding problem" || item === "UIDesign"
                  ? { background: "#337AB7" }
                  : { background: "#f0ad4e" }
              }
            >
              {item}
            </span>
          );
        })}
      </p>
      <button
        className="view-btn"
        value={titleId}
        onClick={(e) => callbackFuction(e.target.value)}
      >
        View {mainCategory === "coding" ? "Code" : "Design"}
      </button>
      <a href={link} target="_blank" rel="noreferrer" className="code-link">
        {subCategory === "java"
          ? "View on Leetcode"
          : subCategory === "javaScript"
          ? "View on FreeCodeCamp"
          : subCategory === "dribbble"
          ? "View on Dribbble"
          : ""}
      </a>
    </article>
  );
};

export default Post;
