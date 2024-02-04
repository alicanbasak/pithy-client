import React from "react";
import ThumbsUp from "../Icons/ThumbsUp";
import ThumsDown from "../Icons/ThumsDown";

const SingleFact = ({ fact, categories }) => {
  const { categoryId, description, likes, dislikes, source } = fact;
  return (
    <li className="fact">
      <p>
        <strong>
          {categories.find(category => category.id === categoryId).title}
        </strong>{" "}
        - {description}
        <a className="source" href={`${source}`}>
          (Source)
        </a>
      </p>
      <div className="info">
        <span className="tag"></span>
        <div className="vote-buttons">
          <button className="votes">
            <ThumbsUp /> {likes}
          </button>
          <button className="votes">
            <ThumsDown />️ {dislikes}
          </button>
        </div>
      </div>
    </li>
  );
};

export default SingleFact;
