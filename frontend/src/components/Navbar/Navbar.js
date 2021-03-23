import { HashLink } from "react-router-hash-link";
import { IoIosMenu } from "react-icons/io";

import "./Navbar.css";

const Navbar = (props) => {
  const handleOpen = () => {
    props.openClickHandler();
  };

  return (
    <div className="top-nav">
      <div className="top-nav-navi">
        <button className="icon-menu" onClick={(e) => handleOpen()}>
          <IoIosMenu size="50px" color="#262626" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
