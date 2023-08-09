import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodySection from "./components/BodySection";

function App() {
  return (
    <Router>
      <Navbar />
      <BodySection />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;
