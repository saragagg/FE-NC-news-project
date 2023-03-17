import { useEffect, useState } from "react";
import { getArticles } from "../api";
import "./ArticlesList.css";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

const ArticlesList = ({ topicQuery }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  const setSortBy = (selectedSortBy) => {

    const newSortParams = new URLSearchParams(searchParams)
    newSortParams.set("sort_by", selectedSortBy);
    setSearchParams(newSortParams);
  }
  const setOrder = (selectedOrder) => {

    const newOrderParams = new URLSearchParams(searchParams)
    newOrderParams.set("order", selectedOrder);
    setSearchParams(newOrderParams);
  }

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery, sortByQuery, orderQuery).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [topicQuery, sortByQuery, orderQuery]);

  return (
    <div className="articlesList">
      <label> Sort by: 
        <select onChange={(e) => setSortBy(e.target.value)}>
        <option disabled value="">Sort the articles</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label> Order: 
        <select onChange={(e) => setOrder(e.target.value)}>
        <option disabled value="" >Order the articles</option>
        <option value="desc">Descending order</option>
        <option value="asc">Ascending order</option>
        </select>
      </label>
      <main>
        {isLoading ? (
          <h2>Loading articles...</h2>
        ) : (
          articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })
        )}
      </main>
    </div>
  );
};

export default ArticlesList;
