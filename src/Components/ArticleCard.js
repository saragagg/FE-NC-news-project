import "./ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {

    const postedDate = new Date(article.created_at);
    
  return (
    <section className="articleCard" key={article.article_id}>
      <img src={article.article_img_url} alt={article.title}/>
      <div className="articleCard-text">
        <h2 className="articleTitle">{article.title}</h2>
        <h3 className="articleTopic">Topic: {article.topic}</h3>
        <h3 className="articleAuthor">Written by: {article.author}</h3>
        <h3 className="articleCreationDate">Posted on: {postedDate.toDateString()}</h3>
        <h4 className="articleVotes">Votes: {article.votes}</h4>
        <h4 className="articleComments">{article.comment_count} comments</h4>
        <Link className="link-to-single-article" to={`/articles/${article.article_id}`}> READ ARTICLE </Link>
      </div>
    </section>
  );
};



export default ArticleCard;
