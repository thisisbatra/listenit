import React, { useState } from "react";
import { useMediaQuery } from 'usehooks-ts'
import styles from "./Header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHome2Fill, RiHome2Line } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const Header = (props) => {
  const [blur, setBlur] = useState(false);
  const location = useLocation();

  const maxWidth600 = useMediaQuery('(max-width: 600px), (max-height: 600px)')

  const inputPlaceholder = "Enter artist, album, song name to get results";

  props.blurFunc(blur);

  return (
    <>
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
            {!maxWidth600 && <SearchBar inputPlaceholder={inputPlaceholder}/>}
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
            <li title="Menu" onClick={()=>setBlur((bool)=>!bool)}>
                {blur 
                    ? <MdOutlineClose />
                    : <BiMenu />
                }
            </li>
            </span>
        </ul>
        <MenuComp maxWidth600={maxWidth600}/>
        </nav>
    </>
  );
};

const SearchBar = (props) => {
    const [inputVal, setInputVal] = useState();
    
    const navigate = useNavigate();
    
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
        <div className={styles.input}>
            <li id={styles.searchIcon}>
                <AiOutlineSearch />
            </li>
            <input
                type="text"
                name="input"
                id="inputField"
                placeholder={props.inputPlaceholder}
                onChange={handler}
                onKeyDown={enterKey}
            />
        </div>
    );
}

const MenuComp = (props) => {
    return (
        <div className={styles.menuCont}>
            {props.maxWidth600 && <SearchBar inputPlaceholder="Search your song"/>}
        </div>
    );
}

export default Header;