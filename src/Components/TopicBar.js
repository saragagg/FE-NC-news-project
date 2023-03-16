import { getTopics } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TopicBar.css";

const TopicBar = ({setSelectedTopic}) => {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
    })
  }, [])

  // const handleClick = (event) => {
  //   setSelectedTopic(event.target.value);
  // }

  return (
    <div className="topic-container">
      {topics.map((topic) => {
        return <Link to={`/articles?topic=${topic.slug}`} className="navBar-link" key={topic.slug}> {topic.slug} news </Link>
      })}
      
    </div>
  );
};

export default TopicBar;
