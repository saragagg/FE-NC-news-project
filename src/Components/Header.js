import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1><span id="nc">NC</span><span id="news">News</span></h1>
      </Link>
    </header>
  );
};

export default Header;
