import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Tiles = () => {
  return (
    <div className="tiles--container">
      <div className="tile--container projects">
        <Link className="nav--link first  " to="/projects">
          <span>
            <FontAwesomeIcon icon={faCode} />
          </span>
          Projects
        </Link>
      </div>
      <div className="tile--container about">
        <Link className="nav--link second" to="/about">
          <span>
            <FontAwesomeIcon icon={faCode} />
          </span>
          About me
        </Link>
      </div>
      <div className="tile--container contact">
        <Link className="nav--link third" to="/contact">
          <span>
            <FontAwesomeIcon icon={faCode} />
          </span>
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Tiles;
