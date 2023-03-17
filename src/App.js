
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import TopicBar from "./Components/TopicBar";
import SingleArticle from "./Components/SingleArticle";
import ArticlesList from "./Components/ArticlesList";
import { useState } from "react";

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
