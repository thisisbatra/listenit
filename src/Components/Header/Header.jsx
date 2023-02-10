import React, { useState } from "react";
import styles from "./Header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHome2Fill, RiHome2Line } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [inputVal, setInputVal] = useState();
  const inputPlaceholder = "Enter artist, album, song name to get results";
  const navigate = useNavigate();

  const location = useLocation();

  const handler = (e) => {
    setInputVal(e.target.value);
    // console.log(e);
  };

  const enterKey = (e) => {
    if (e.key === "Enter") {
      // console.log("enter is pressed! and the val: ",inputVal);
      navigate("/search", { state: { inputVal } });
    }
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <span>
          <li>listenIt</li>
          <li title="Home">
            <Link to="/">
              <span className={location.pathname === "/" ? styles.active : styles.activeness}>
                {location.pathname === "/"
                  ? <RiHome2Fill />
                  : <RiHome2Line />
                }
              </span>
            </Link>
          </li>
        </span>
        <div className={styles.input}>
          <li id={styles.searchIcon}>
            <AiOutlineSearch />
          </li>
          <input
            type="text"
            name="input"
            id="inputField"
            placeholder={inputPlaceholder}
            onChange={handler}
            onKeyDown={enterKey}
          />
        </div>
        <span>
          {/* <li><Link to="/like"><BsSuitHeart/></Link></li> */}
          <li title="View your Liked Songs">
            <Link to="/like">
              <span className={location.pathname === "/like" ? styles.active : styles.activeness}>
                <i className={location.pathname === "/like" ? "bi bi-heart-fill" : "bi bi-heart"} />
              </span>
            </Link>
          </li>
          {/* <li><FaUserCircle/></li> */}
          <li title="Menu">
            <BiMenu />
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default Header;
