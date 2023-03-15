import { useState } from "react";
import { postArticleComment } from "../api";
import "./CommentAdder.css";

const CommentAdder = ({ article_id }) => {
  const [newComment, setNewComment] = useState({ username: "rogersop", body: "" });

  const handleChange = (event) => {
    setNewComment((currentNewComment) => {
        return {...currentNewComment, body: event.target.value}
    }); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    postArticleComment(article_id, newComment).then((response) => {
        console.log(response); 
    })
  }

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      <label>
        <textarea
          id="newCommentBody"
          value={newComment.body}
          placeholder="Add a comment..."
          onChange={handleChange}></textarea>
      </label>
      <button>Post comment!</button>
    </form>
  );
};

export default CommentAdder;

//feedback to user (your comment was posted succesfully or error)
//optimistic rendering 
// username? 