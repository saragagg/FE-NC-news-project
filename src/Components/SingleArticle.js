import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, voteForArticle } from "../api";
import CommentsList from "./CommentsList";
import "./SingleArticle.css";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false);
  const [articleNotFound, setArticleNotFound] = useState(false)
  const postedDate = new Date(article.created_at);

  useEffect(() => {
    setArticleNotFound(false)
    setIsLoading(true);
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    }).catch((err) => {
      setArticleNotFound(true)
      setIsLoading(false)
    });
  }, [article_id]);

  const handleUpVote = () => {
    setIsVotingErr(false);
    setUpVote(1);
    setArticle((currentArticle) => {
      return { ...currentArticle, votes: currentArticle.votes + 1 };
    });

    voteForArticle(article_id, +1).catch((err) => {
      setIsVotingErr(true);
    });
  };

  const handleDownVote = () => {
    setIsVotingErr(false);
    setDownVote(1);
    setArticle((currentArticle) => {
      return { ...currentArticle, votes: currentArticle.votes - 1 };
    });

    voteForArticle(article_id, -1).catch((err) => {
      setIsVotingErr(true);
    });
  };

  if (upVote !== 0 && downVote !== 0) {
    setUpVote(0);
    setDownVote(0);
  }

  return (
    <>
    {articleNotFound ? <p>Article not found</p> : <main className="full-single-article">
      {isLoading ? (
        <h2> Loading article... </h2>
      ) : (
        <>
          <h2>{article.title}</h2>
          <h3>{article.topic}</h3>
          <img
            src={article.article_img_url}
            alt={`cover of ${article.title} article`}
          />
          <h3>
            <p> Written by {article.author}</p>
            <p>{postedDate.toDateString()}</p>
          </h3>

          <h3>
            <p className="article-body">{article.body}</p>
          </h3>
          <h4>🖤 {article.votes} votes</h4>
          <button
            className="single-article-button"
            value="upvote"
            onClick={handleUpVote}
            disabled={upVote !== 0}>
            👍 Upvote
          </button>
          <button
            className="single-article-button"
            value="downvote"
            onClick={handleDownVote}
            disabled={downVote !== 0}>
            👎 Downvote
          </button>
          {isVotingErr && (
            <p>Ooops, your vote didn't go well. Please try again later!</p>
          )}
          <h4 className="single-article-comments">
            🗨 {article.comment_count} comments:
          </h4>
          <CommentsList article_id={article_id} />
        </>
      )}
    </main>}
    
    </>
  );
};

export default SingleArticle;
