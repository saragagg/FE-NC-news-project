import Link from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>     
         <h1>NC News</h1>
        {/* h1 will have a link to go back to the main page */}
      {/* <Link to="/">Main page</Link> */}
    </header>
  );
};

export default Header;
