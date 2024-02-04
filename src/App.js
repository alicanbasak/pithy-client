import React, { useState } from "react";
import NewFact from "./components/Form/NewFact";
import FactList from "./components/Facts/FactList";

const Header = ({ title, handleShowForm }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="48" width="48" alt="Today I Learned Logo" />
        <h1>{title}</h1>
      </div>
      <button
        onClick={() => handleShowForm()}
        className="btn btn-large btn-post"
      >
        Share a fact
      </button>
    </header>
  );
};

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <Header handleShowForm={handleShowForm} title={"Today I Learned"} />
      <NewFact showForm={showForm} />
      <FactList />
    </div>
  );
}

export default App;
