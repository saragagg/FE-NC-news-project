import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useState } from "react";
import { postArticleComment } from "../api";
import "./CommentAdder.css";

const CommentAdder = ({ article_id, setComments }) => {
  const {user} = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    username: user.username,
    body: undefined,
  });
  const [isPostedErr, setIsPostedErr] = useState(false)
  const [isPostedSuccess, setIsPostedSuccess] = useState(false)

  const regex = /[A-Z0-9]+/gi

  const handleChange = (event) => {
    setNewComment((currentNewComment) => {
      return { ...currentNewComment, body: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPostedSuccess(false)
    setIsPostedErr(false)

    newComment.body.match(regex) === null ?
    setIsPostedErr(true):
    postArticleComment(article_id, newComment)
      .then((newPostedComment) => {
        setIsPostedSuccess(true)
        setComments((currentComments) => {
          return [...currentComments, newPostedComment];
        });
      }).catch((err) => {
        setIsPostedSuccess(false)
        setIsPostedErr(true)
      })

    setNewComment((currentNewComment) => {
      return { ...currentNewComment, body: "" };
    });
  };

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      {isPostedErr && <p id="comment-error-message">Sorry, something went wrong! Make sure to add your comment into the box or try again later. </p>}
      {isPostedSuccess && <p id="comment-success-message">Thanks! Your comment has been posted successfully ❤️</p>}
      <label>
        <textarea
          id="newCommentBody"
          value={newComment.body}
          placeholder="Add a comment..."
          onChange={handleChange}></textarea>
      </label>
      <button id="post-comment-button" disabled={newComment.body===""}>Post comment!</button>
    </form>
  );
};

export default CommentAdder;
