import React from "react";

const Categories = ({
  categories,
  setActiveCategoryHandler,
  activeCategory,
}) => {
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

export default Categories;
