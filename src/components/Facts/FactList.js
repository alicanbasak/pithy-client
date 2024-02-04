import React, { useEffect, useState } from "react";

import SingleFact from "./SingleFact";
import Categories from "./Categories";

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

const FactList = ({ status, categories }) => {
  const [activeCategory, setActiveCategory] = useState(1);
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
    <main className={status ? "main main-blur" : "main"}>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategoryHandler={setActiveCategoryHandler}
      />
      <section>
        <ul>
          {facts.map(fact => (
            <SingleFact key={fact.id} fact={fact} categories={categories} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default FactList;
