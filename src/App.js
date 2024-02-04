import React, { useState } from "react";
import NewFact from "./components/Form/NewFact";
import FactList from "./components/Facts/FactList";

const Header = ({ title, handleShowForm, status }) => {
  return (
    <header className={status ? "header header-blur" : "header"}>
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
  const categories = [
    {
      id: 1,
      title: "JavaScript",
    },
    {
      id: 2,
      title: "C#",
    },
    {
      id: 3,
      title: "Architecture",
    },
    {
      id: 4,
      title: "Cloud",
    },
    {
      id: 5,
      title: "Go",
    },
  ];

  const handleShowForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container">
      <Header
        status={showForm}
        handleShowForm={handleShowForm}
        categories={categories}
        title={"Today I Learned"}
      />
      <NewFact
        categories={categories}
        showForm={showForm}
        closeForm={closeForm}
      />
      <FactList status={showForm} categories={categories} />
    </div>
  );
}

export default App;
