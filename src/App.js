import React from 'react';
import ThumbsUp from "./components/Icons/ThumbsUp";
import ThumsDown from "./components/Icons/ThumsDown";
import SubmitIcon from "./components/Icons/SubmitIcon";
import NewFact from "./components/Form/NewFact";
import FactList from "./components/Facts/FactList";


const Header = ({title}) => {
  return (<header className="header">
    <div className="logo">
      <img src="logo.png" height="48" width="48" alt="Today I Learned Logo"/>
      <h1>{title}</h1>
    </div>

    <button className="btn btn-large btn-post">Share a fact</button>
  </header>)
}

function App() {
  return (
    <div className="container">
      <Header title={"Today I Learned"}/>
      <NewFact/>
      <FactList/>
    </div>
  );
}

export default App;