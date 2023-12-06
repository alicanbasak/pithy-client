import React, {useState} from 'react';
import ThumbsUp from "../Icons/ThumbsUp";
import ThumsDown from "../Icons/ThumsDown";
import SingleFact from "./SingleFact";


const categories = [
  {
    id: 1,
    title: "JavaScript"
  },
  {
    id: 2,
    title: "C#"
  },
  {
    id: 3,
    title: "Architecture"
  },
  {
    id: 4,
    title: "Cloud"
  },
]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1)
  const setActiveCategoryHandler = (e) => {
    setActiveCategory(e.target.value)
  }
  return (<aside>
    <ul className="aside">
      {
        categories.map((category) => <li value={category.id} key={category.id} onClick={setActiveCategoryHandler}
                                         className={`category ${activeCategory === category.id ? "active" : ""}`}>{category.title}</li>)
      }
    </ul>
  </aside>)
}


const FactList = () => {

  const [facts, setFacts] = useState([])
  return (
    <main className="main">
      <Categories/>
      <section>
        <ul>
          {
            facts.map((fact) => <SingleFact/>)
          }
        </ul>
      </section>
    </main>
  );
};

export default FactList;