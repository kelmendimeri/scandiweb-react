import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
