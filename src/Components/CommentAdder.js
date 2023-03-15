import "./CommentAdder.css";

const CommentAdder = ({article_id}) => {
 
    return (
        <form>
           <label><input type="text" placeholder="Add a comment..."></input></label>
            <button>Post comment!</button>
        </form>
    )
}

export default CommentAdder;

