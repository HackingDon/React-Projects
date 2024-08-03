import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul className="link">
      <Link to="/clock" style={{ textDecoration: "none" }}>
        <li>Clock</li>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <li>LoginPage</li>
      </Link>
      <Link to="/weather" style={{ textDecoration: "none" }}>
        <li>Weather</li>
      </Link>
    </ul>
  );
};

export default Home;
