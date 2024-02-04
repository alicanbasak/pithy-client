import React, { useState } from "react";
import SubmitIcon from "../Icons/SubmitIcon";
import CloseIcon from "../Icons/CloseIcon";

const NewFact = ({ showForm, closeForm, categories }) => {
  const [formData, setFormData] = useState({
    description: "",
    source: "",
    categoryId: null,
    maxChars: 0,
  });

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      maxChars: formData.description.length,
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="modal-container"
      style={{
        display: showForm ? "flex" : "none",
      }}
    >
      <div className="modal-content">
        <div className="modal-head">
          <h2>Share a fact</h2>
          <CloseIcon closeModal={closeForm} />
        </div>
        <form className="fact-form">
          <div className="fact-section">
            <input
              type="text"
              name="description"
              placeholder="Share a fact with the world..."
              onChange={handleFormChange}
              value={formData.description}
              maxLength={200}
            />
            <span>
              {formData.description.length}/{200}
            </span>
          </div>
          <div className="alt-section">
            <input
              type="text"
              name="source"
              placeholder="Trustworthy source..."
              onChange={handleFormChange}
              value={formData.source}
            />
            <select onChange={handleFormChange} name="categoryId">
              {categories.map(category => (
                <option value={Number(category.id)} key={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
            <button onClick={handleFormSubmit} className="btn submit">
              <SubmitIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewFact;
