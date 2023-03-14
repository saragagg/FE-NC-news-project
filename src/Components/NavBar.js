import { useState, useEffect } from "react";
import { getTopics } from "../api";
import "./NavBar.css";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
    });
  }, []);

  return (
    <div className="navBar-container">
      <button id="navBar-button"> See articles by topic </button>
    </div>
  );
};

export default NavBar;
