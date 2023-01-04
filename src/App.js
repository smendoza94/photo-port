import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";

// React components follow the PascalCase naming convention.
// Knowing this will help you quickly identify whether a
// function is a component or just a regular function.

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
