import { Link } from "react-router-dom";


const Navigator = () => {
  return (
    <nav className="navigator--container">
      <ul className="nav--links--list">
        <li>
          <Link className="nav--link" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav--link" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="nav--link" to="/about">About me</Link>
        </li>
        <li>
          <Link className="nav--link" to="/contact">Contact me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
