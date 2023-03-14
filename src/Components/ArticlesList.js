import { useEffect, useState } from "react";
import { getArticles } from "../api";
import "./ArticlesList.css";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
    });
  }, []);

  return (
    <main className="articlesList">
      {articles.map((article) => {
        return (
          <div key={article.article_id}>
            <ArticleCard article={article} />
          </div>
        );
      })}
    </main>
  );
};

export default ArticlesList;
