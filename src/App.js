import "./App.css";

import React from "react";

import Header from "./Component/Header";

import CounterMatch from "./Component/CounterMatch";
function App() {
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <CounterMatch />
      </div>
    </>
  );
}

export default App;
