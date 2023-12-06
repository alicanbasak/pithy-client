import React from 'react';
import SubmitIcon from "../Icons/SubmitIcon";

const NewFact = () => {
  return (
    <form className="fact-form">
      <input type="text" placeholder="Share a fact with the world..."/>
      <span>200</span>
      <input type="text" placeholder="Trustworthy source..."/>
      <select>
        <option value="">Choose category:</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="finance">Finance</option>
      </select>
      <button className="btn submit"><SubmitIcon/></button>
    </form>
  );
};

export default NewFact;