import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from 'usehooks-ts'
import styles from "./Header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHome2Fill, RiHome2Line } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { BsInfoCircle, BsInfoCircleFill } from "react-icons/bs";

const Header = (props) => {
  const [blur, setBlur] = useState(false);
  const location = useLocation();

  const maxWidth600 = useMediaQuery('(max-width: 600px), (max-height: 600px)')

  const inputPlaceholder = "Enter artist, album, song name to get results";

  useEffect(() => {
    props.blurFunc(blur);
  }, [blur, props]);

  return (
    <nav className={styles.nav}>
        <ul>
            <span>
            <li>Chorus</li>
            {!maxWidth600 && <li title="Home">
                <Link to="/">
                <span className={location.pathname === "/" ? styles.active : styles.activeness}>
                    {location.pathname === "/"
                        ? <RiHome2Fill />
                        : <RiHome2Line />
                    }
                </span>
                </Link>
            </li>}
            </span>
            {!maxWidth600 && <SearchBar inputPlaceholder={inputPlaceholder}/>}
            <span>
            {/* <li><Link to="/like"><BsSuitHeart/></Link></li> */}
            {!maxWidth600 && (
                <>
                    {/* ------------- Likes Tab ------------- */}
                    {/* <li title="View your Liked Songs">
                        <Link to="/like">
                            <span className={location.pathname === "/like" ? styles.active : styles.activeness}>
                                <i className={location.pathname === "/like" ? "bi bi-heart-fill" : "bi bi-heart"} style={{ lineHeight: "0" }}/>
                            </span>
                        </Link>
                    </li> */}

                    {/* ------------- Our Team Tab ------------- */}
                    <li title="Our Team">
                        <Link to="/ourTeam">
                            <span className={location.pathname === "/ourTeam" ? styles.active : styles.activeness}>
                                {location.pathname === "/ourTeam"
                                    ? <BsInfoCircleFill />
                                    : <BsInfoCircle />
                                }
                            </span>
                        </Link>
                    </li>
                </>
            )}
            {/* <li><FaUserCircle/></li> */}
            <li title="Menu" onClick={()=>setBlur((bool)=>!bool)}>
                {blur 
                    ? <MdOutlineClose />
                    : <BiMenu />
                }
            </li>
            </span>
        </ul>
        {/* {maxWidth600 && <MenuComp location={location} openOn={blur} closeOn={(bool)=>setBlur(bool)}/>} */}
        {maxWidth600 &&
            <div className={`${styles.menuCont} ${blur && styles.menuContActive}`}>
                {/* ------------- SearchBar ------------- */}
                <SearchBar inputPlaceholder="Search your song" autoFocus={true} blur={blur}/>
                
                {/* ------------- Home Tab ------------- */}
                <span onClick={()=>setBlur(false)} className={location.pathname === "/" ? styles.active2 : styles.activeness2}>
                    <Link to="/">
                        {location.pathname === "/"
                            ? <RiHome2Fill />
                            : <RiHome2Line />
                        }&nbsp;&nbsp;Home
                    </Link>
                </span>
                <div className={styles.hrLine}/>
                
                {/* ------------- Like Tab (Commented Out for now) ------------- */}
                {/* <span onClick={()=>setBlur(false)} className={location.pathname === "/like" ? styles.active2 : styles.activeness2}>
                    <Link to="/like">
                        <i className={location.pathname === "/like" ? "bi bi-heart-fill" : "bi bi-heart"} />&nbsp;&nbsp;Liked Songs
                    </Link>
                </span> */}
                
                {/* ------------- Our Team Tab ------------- */}
                <span onClick={()=>setBlur(false)} className={location.pathname === "/ourTeam" ? styles.active2 : styles.activeness2}>
                    <Link to="/ourTeam">
                        {location.pathname === "/ourTeam"
                            ? <BsInfoCircleFill />
                            : <BsInfoCircle />
                        }&nbsp;&nbsp;Our Team
                    </Link>
                </span>
            </div>
        }
    </nav>
  );
};

const SearchBar = (props) => {
    const [inputVal, setInputVal] = useState();
    
    const navigate = useNavigate();
    const inputRef = useRef();
    
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
    
    //useEffect(()=>{
    //    inputRef.current.focus();
    //}, [props.blur]);

    return (
        <div className={styles.input}>
            <li id={styles.searchIcon}>
                <AiOutlineSearch />
            </li>
            <input
                ref={inputRef}
                type="text"
                name="input"
                id="inputField"
                // autoFocus
                placeholder={props.inputPlaceholder}
                onChange={handler}
                onKeyDown={enterKey}
            />
        </div>
    );
}

export default Header;