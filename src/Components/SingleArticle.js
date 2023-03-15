import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, voteForArticle } from "../api";
import CommentsList from "./CommentsList";
import "./SingleArticle.css";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();
  const [vote, setVote] = useState(1);
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);

  const postedDate = new Date(article.created_at);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleVote = (event) => {
    if (event.target.value === "downvote") {
      setVote(-1);
      setDownVote(1);
    } else if (event.target.value === "upvote") {
      setUpVote(1);
    }
    setArticle((currentArticle) => {
      return { ...currentArticle, votes: currentArticle.votes + vote };
    });

    voteForArticle(article_id, vote);
  };

  if (upVote !== 0 && downVote !== 0) {
    setUpVote(0);
    setDownVote(0);
  }

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
          <h4>🖤 {article.votes} votes</h4>
          <button
            className="single-article-button"
            value="upvote"
            onClick={handleVote}
            disabled={upVote !== 0}>
            👍 Upvote
          </button>
          <button
            className="single-article-button"
            value="downvote"
            onClick={handleVote}
            disabled={downVote !== 0}>
            👎 Downvote
          </button>
          {/* placeholder for later tickets */}
          <h4 className="single-article-comments">
            🗨 {article.comment_count} comments:
          </h4>
          <CommentsList article_id={article_id} />
        </>
      )}
    </main>
  );
};

export default SingleArticle;
