import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Kotamu from "./pages/Kotamu";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="navbar-left">
            <div className="navbar-brand">WeatherApp</div>
            <div className="navbar-slogan">Your reliable weather companion 🌦️</div>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/kotamu" className={({ isActive }) => (isActive ? "active" : "")}>
                  Kotamu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kotamu" element={<Kotamu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 MIKAEL's WeatherApp | Built with ❤️ and React.js</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
