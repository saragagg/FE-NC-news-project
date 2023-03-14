import { useState } from "react";
import "./App.css";
import SingleArticle from "./SingleArticle";

function App() {
  const testArticle = {
    article_id: 3,
    title: "Eight pug gifs that remind me of mitch",
    topic: "mitch",
    author: "icellusedkars",
    body: "some gifs",
    created_at: "2020-11-03T09:12:00.000Z",
    votes: 0,
    article_img_url:
      "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
    comment_count: "2",
  };
  
  const [article, setArticle] = useState(testArticle);

  return <SingleArticle article={article} />;
}

export default App;
