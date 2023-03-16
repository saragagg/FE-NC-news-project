import { useEffect, useState } from "react";
import { getArticles } from "../api";
import "./ArticlesList.css";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({topicQuery}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [topicQuery]);

  return (
      <main className="articlesList">
        {isLoading ? (
          <h2>Loading articles...</h2>
        ) : (
          articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })
        )}
      </main>
   
  );
};

export default ArticlesList;
