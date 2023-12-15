import React from "react";
import ThumbsUp from "../Icons/ThumbsUp";
import ThumsDown from "../Icons/ThumsDown";

const SingleFact = () => {
  return (
    <li className="fact">
      <p>
        React is being developed by Meta (formerly facebook)
        <a className="source" href="https://opensource.fb.com/" target="_blank">
          (Source)
        </a>
      </p>
      <div className="info">
        <span className="tag">technology</span>
        <div className="vote-buttons">
          <button className="votes">
            <ThumbsUp /> 24
          </button>
          <button className="votes">
            <ThumsDown />️ 4
          </button>
        </div>
      </div>
    </li>
  );
};

export default SingleFact;
