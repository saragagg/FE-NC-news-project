import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import CommentsList from "./CommentsList";
import "./SingleArticle.css"

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();
  const postedDate = new Date(article.created_at);


  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <main className="full-single-article">
      {isLoading ? (
        <h2> Loading article... </h2>
      ) : (
        <>
          <h2>{article.title}</h2>
          <h3>{article.topic}</h3>
          <img
            src={article.article_img_url}
            alt={`image of ${article.title} article`}
          />
          <h3>
            <p> Written by {article.author}</p>
            <p>{postedDate.toDateString()}</p>
          </h3>

          <h3>
            <p>{article.body}</p>
          </h3>
          <h4>Votes: {article.votes}</h4>
          <button>👍 Upvote</button>
          <button>👎 Downvote</button>
          {/* placeholder for later tickets */}
          <h4 className="single-article-comments">🗨 {article.comment_count} comments:</h4>
          <CommentsList article_id={article_id}/>
        </>
      )}
    </main>
  );
};

export default SingleArticle;
