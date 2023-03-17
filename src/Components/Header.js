import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/"> 
        <h1 className="header"><span id="nc">NC</span><span id="news">News</span></h1>
      </Link>
    </header>
  );
};

export default Header;
