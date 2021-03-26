import React, { useState } from "react";
import Content from "./content/Content";
import Post from "./post/Post";
import "./PostSection.css";
import ProblemData from "../../data/ProblemData";
import UIComponentData from "../../data/UIComponentData";
import UIContent from "./content/uicontent/UIContent";

const filterData = [
  {
    id: 1,
    name: "problems",
  },
  {
    id: 2,
    name: "uiComponent",
  },
];

const PostSection = () => {
  const [filter, setFilter] = useState("problems");
  const [content, setContent] = useState("problems-house-robber");
  const [active, setActive] = useState(0);
  const [uiContent, setUiContent] = useState("uidesign-bookmygym");

  function changeContentfromChild(value) {
    const id = value.split("-");
    if (id[0] === "problems") {
      setContent(value);
    }
    if (id[0] === "uidesign") {
      setUiContent(value);
    }
  }

  return (
    <div className="posts-section">
      <div className="posts-leftside">
        <div className="filterbtn-container">
          {filterData.map((item, index) => {
            return (
              <button
                key={item.id}
                value={item.name}
                className={`filterbtn ${index === active && "activebtn"}`}
                onClick={(e) => {
                  setFilter(e.target.value);
                  setActive(index);
                }}
              >
                {item.name === "problems" ? "Problems" : "UI Design"}
              </button>
            );
          })}
        </div>
        <div className="posts-list">
          {filter === "problems"
            ? ProblemData.map(
                ({
                  id,
                  title,
                  titleId,
                  tags,
                  mainCategory,
                  subCategory,
                  link,
                }) => {
                  return (
                    <Post
                      key={id}
                      title={title}
                      titleId={titleId}
                      tags={tags}
                      mainCategory={mainCategory}
                      subCategory={subCategory}
                      link={link}
                      callbackFuction={changeContentfromChild}
                    />
                  );
                }
              )
            : UIComponentData.map(
                ({
                  id,
                  title,
                  titleId,
                  tags,
                  mainCategory,
                  subCategory,
                  link,
                }) => {
                  return (
                    <Post
                      key={id}
                      title={title}
                      titleId={titleId}
                      tags={tags}
                      mainCategory={mainCategory}
                      subCategory={subCategory}
                      link={link}
                      callbackFuction={changeContentfromChild}
                    />
                  );
                }
              )}
        </div>
      </div>
      <div className="posts-rightside">
        {filter === "problems" ? (
          <Content value={content} />
        ) : (
          <UIContent value={uiContent} />
        )}
      </div>
    </div>
  );
};

export default PostSection;
