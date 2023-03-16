import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SingleArticle from "./Components/SingleArticle";
import ArticlesList from "./Components/ArticlesList";
import TopicBar from "./Components/TopicBar";
import { useSearchParams } from "react-router-dom";

function App() {

  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get('topic'); 

  return (
    <div>
      <Header />
      <TopicBar setSearchParams={setSearchParams} />
      <Routes>
        <Route path="/articles" element = {<ArticlesList topicQuery={topicQuery}/>}/>
        <Route path="/articles/:article_id" element = {<SingleArticle />}/>
      </Routes>
    </div>
  );
}

export default App;
