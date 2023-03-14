import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ArticlesList from "./Components/ArticlesList";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <ArticlesList />
    </div>
  );
}

export default App;
