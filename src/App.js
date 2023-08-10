import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BodySection from "./components/BodySection";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="products" exact Component={Products} />
      </Routes>
    </Router>
  );
}

export default App;
