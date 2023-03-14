
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SingleArticle from "./Components/SingleArticle";
import ArticlesList from "./Components/ArticlesList";

function App() {

  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element = {<ArticlesList />}/>
        <Route path="/articles/:article_id" element = {<SingleArticle />}/>
      </Routes>
    </div>
  );
}

export default App;
