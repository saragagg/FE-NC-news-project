import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SingleArticle from "./Components/SingleArticle";
import ArticlesList from "./Components/ArticlesList";
import TopicBar from "./Components/TopicBar";

function App() {

  return (
    <div>
      <Header />
      <TopicBar />
      <Routes>
      <Route path="/" element = {<ArticlesList />}/>
        <Route path="/articles" element = {<ArticlesList />}/>
        <Route path="/articles/:article_id" element = {<SingleArticle />}/>
      </Routes>
    </div>
  );
}

export default App;
