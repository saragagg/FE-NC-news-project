import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({setSelectedTopic}) => {
  return (
    <header>
      <Link to="/articles" onClick={() => {setSelectedTopic(undefined)}}>
        <h1 className="header"><span id="nc">NC</span><span id="news">News</span></h1>
      </Link>
    </header>
  );
};

export default Header;
