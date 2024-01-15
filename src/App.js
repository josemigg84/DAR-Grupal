// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content-wrapper">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Ejercicio1" element={<Ejercicio1 />} />
            <Route path="/Ejercicio2" element={<Ejercicio2 />} />
            <Route path="/Ejercicio3" element={<Ejercicio3 />} />
            <Route path="/Ejercicio4" element={<Ejercicio4 />} />
            <Route path="/Ejercicio5" element={<Ejercicio5 />} />
            <Route path="/DAR-Grupal" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
