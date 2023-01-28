import React, { useState } from 'react';
import styles from './Header.module.css';
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import {BsSuitHeart} from 'react-icons/bs';
import {BiMenu} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [inputVal,setInputVal]=useState();
    const inputPlaceholder="enter artist, album, song name to get results"
    const handler=(e)=>{
        setInputVal(e.target.value);
        // console.log(e);
    }
    const element=document.getElementById('inputField');
    
        window.addEventListener("keydown",(e)=>{
            if(e.key==="Enter"){
                console.log("enter is pressed!")
            }
        })
    

    // console.log("from state",inputVal);
    return (
        <nav className={styles.nav}>
            <ul>
                <span>
                <li>listenit</li>
                <li><Link to="/"><AiFillHome/></Link></li>
                </span>
                <div className={styles.input}>
                <li><AiOutlineSearch/></li>
                <input type="text" name="input" id='inputField' placeholder={inputPlaceholder} onChange={handler}/>
                </div>
                <span>
                <li><Link to=""><BsSuitHeart/></Link></li>
                <li><FaUserCircle/></li>
                <li><BiMenu/></li>
                </span>
            </ul>
        </nav>
    );
}

export default Header;
