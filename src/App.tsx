import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__header__container"></div>
      </div>
      <div className="app__workspace-switcher"></div>
      <div className="app__sidepanel"></div>
      <div className="app__main-content"></div>
      <div className="app__reading-pane"></div>
    </div>
  );
}

export default App;
