
import "./NavBar.css";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
    });
  }, []);
 
  
  return (
    <div className="navBar-container">
      {topics.map((topic) => {
        return <Link className="navBar-button" key={topic.slug}>{topic.slug} news</Link>
      })}
      
    </div>
  );
};

export default NavBar;
