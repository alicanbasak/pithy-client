import React, { useEffect, useState } from "react";

import SingleFact from "./SingleFact";

const categories = [
  {
    id: 0,
    title: "All",
  },
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

const initialFacts = [
  {
    id: 1,
    categoryId: 1,
    description: "JavaScript is a programming language.",
    likes: 10,
    dislikes: 2,
    source: "https://opensource.fb.com/",
  },
  {
    id: 2,
    categoryId: 2,
    description: "C# is a programming language.",
    likes: 10,
    dislikes: 2,
    source: "https://opensource.fb.com/",
  },
  {
    id: 3,
    categoryId: 3,
    description: "Architecture is a programming language.",
    likes: 10,
    dislikes: 2,
    source: "https://opensource.fb.com/",
  },
  {
    id: 4,
    categoryId: 4,
    description: "Cloud is not a programming language.",
    likes: 10,
    dislikes: 2,
    source: "https://opensource.fb.com/",
  },
  {
    id: 5,
    categoryId: 5,
    description: "Go is a programming language.",
    likes: 10,
    dislikes: 2,
    source: "https://opensource.fb.com/",
  },
];

const Categories = ({ setActiveCategoryHandler, activeCategory }) => {
  return (
    <aside>
      <ul className="aside">
        {categories.map(category => (
          <li
            value={category.id}
            key={category.id}
            onClick={setActiveCategoryHandler}
            className={`category ${
              activeCategory === category.id ? "active" : ""
            }`}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Facts = ({ facts, categories }) => {
  return (
    <section>
      <ul>
        {facts.map(fact => (
          <SingleFact key={fact.id} fact={fact} categories={categories} />
        ))}
      </ul>
    </section>
  );
};

const FactList = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [facts, setFacts] = useState([]);

  const setActiveCategoryHandler = e => {
    setActiveCategory(e.target.value);
  };

  useEffect(() => {
    activeCategory === 0
      ? setFacts(initialFacts)
      : setFacts(
          initialFacts.filter(fact => fact.categoryId === activeCategory)
        );
  }, [activeCategory]);

  return (
    <main className="main">
      <Categories
        activeCategory={activeCategory}
        setActiveCategoryHandler={setActiveCategoryHandler}
      />
      <Facts facts={facts} categories={categories} />
    </main>
  );
};

export default FactList;
