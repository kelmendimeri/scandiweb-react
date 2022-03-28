import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App container">
      <Header />
      <Body />
    </div>
  );
}

export default App;
