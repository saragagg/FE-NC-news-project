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

  const handleChange = (event) => {
    setNewComment((currentNewComment) => {
      return { ...currentNewComment, body: event.target.value };
    });
  };

  const postSuccess = () => {
    alert("Comment posted successfully!");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postArticleComment(article_id, newComment)
      .then((newPostedComment) => {
        setComments((currentComments) => {
          return [...currentComments, newPostedComment];
        });
        postSuccess();
      }).catch((err) => {
        alert("Sorry, something went wrong! Please try again later");
      })

    setNewComment((currentNewComment) => {
      return { ...currentNewComment, body: "" };
    });
  };

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      <label>
        <textarea
          id="newCommentBody"
          value={newComment.body}
          placeholder="Add a comment..."
          onChange={handleChange}></textarea>
      </label>
      <button id="post-comment-button">Post comment!</button>
    </form>
  );
};

export default CommentAdder;
