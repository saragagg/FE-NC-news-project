import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import "./CommentsList.css"
import { deleteComment } from "../api";

const CommentCard = ({ comment }) => {
  const postedDate = new Date(comment.created_at);
  const {user} = useContext(UserContext);

  const handleDelete = (event) => { 
    console.log(event)
    event.preventDefault(); 
    
    deleteComment(event.target.value).then(() => {
      
    }).catch((err) => {
     console.log(err)
    })
  }

  return (
    <div className="comment-card">
      <h4>
        <p className="comment-author">{comment.author} on {postedDate.toDateString()}</p>
        <p className="comment-body">{comment.body}</p>
      </h4>
      <h5>🖤 {comment.votes} votes</h5>
      {comment.author === user.username ? <button value={comment.comment_id} onClick={handleDelete}>Delete comment</button> : <></>}
      <button >👍 Upvote comment</button>
          <button>👎 Downvote comment</button>
    </div>
  );
};

export default CommentCard;
