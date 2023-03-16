import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsByArticleId } from "../api";
import CommentAdder from "./CommentAdder";
import "./CommentsList.css";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsData) => {
      setComments(commentsData);
    });
  }, [article_id]);

  return (
    <>
    <section className="comments-list">
      {comments.map((comment) => {
        return (
            <CommentCard key={comment.comment_id} comment={comment} />
        );
      })}
    </section>
    <section>
       <CommentAdder setComments={setComments} article_id={article_id} />
    </section>
    </>
  );
};

export default CommentsList;
