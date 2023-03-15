
import "./CommentsList.css"

const CommentCard = ({ comment }) => {
  const postedDate = new Date(comment.created_at);

  return (
    <div className="comment-card">
      <h4>
        {comment.author} on {postedDate.toDateString()}
        <p className="comment-body">{comment.body}</p>
      </h4>
      <h5>🖤 {comment.votes} votes</h5>
      <button>👍 Upvote comment</button>
          <button>👎 Downvote comment</button>
    </div>
  );
};

export default CommentCard;
