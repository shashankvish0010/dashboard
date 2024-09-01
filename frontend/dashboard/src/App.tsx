import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Contact from "./pages/Contact";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
