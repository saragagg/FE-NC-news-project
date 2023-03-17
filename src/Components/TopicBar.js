import { useState, useEffect } from "react";
import "./TopicBar.css";
import { getTopics } from "../api";
import { Link } from "react-router-dom";

const TopicBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
    });
  }, []);

  return (
    <div className="topics-container">
      {topics.map((topic) => {
        return (
          <Link
            to={`/articles?topic=${topic.slug}`}
            className="topicBar-link"
            key={topic.slug}>
           
            {topic.slug} news
          </Link>
        );
      })}
    </div>
  );
};

export default TopicBar;
