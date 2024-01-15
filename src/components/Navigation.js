// components/Navigation.js
import React from "react";
import NavItem from "./NavItem";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="sidebar">
      <ul>
        <NavItem to="/">Inicio</NavItem>
        <NavItem to="/Ejercicio1">Ejercicio 1</NavItem>
        <NavItem to="/Ejercicio2">Ejercicio 2</NavItem>
        <NavItem to="/Ejercicio3">Ejercicio 3</NavItem>
        <NavItem to="/Ejercicio4">Ejercicio 4</NavItem>
        <NavItem to="/Ejercicio5">Ejercicio 5</NavItem>
      </ul>
    </nav>
  );
};

export default Navigation;
