import React, { useEffect, useState } from "react";

import Categories from "./Categories";
import SignlePith from "./SinglePith";

const initialPiths = [
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

const PithList = ({ status, categories }) => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [piths, setPiths] = useState([]);

  const setActiveCategoryHandler = e => {
    setActiveCategory(e.target.value);
  };

  useEffect(() => {
    activeCategory === 0
      ? setPiths(initialPiths)
      : setPiths(
          initialPiths.filter(pith => pith.categoryId === activeCategory)
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
          {piths.map(pith => (
            <SignlePith key={pith.id} pith={pith} categories={categories} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PithList;
