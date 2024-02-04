import React from "react";
import SubmitIcon from "../Icons/SubmitIcon";

const NewFact = ({ showForm }) => {
  return (
    <form
      className="fact-form"
      style={{
        display: showForm ? "flex" : "none",
      }}
    >
      <div className="fact-section">
        <input type="text" placeholder="Share a fact with the world..." />
        <span>200</span>
      </div>
      <div className="alt-section">
        <input type="text" placeholder="Trustworthy source..." />
        <select>
          <option value="">Choose category:</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="finance">Finance</option>
        </select>
        <button className="btn submit">
          <SubmitIcon />
        </button>
      </div>
    </form>
  );
};

export default NewFact;
