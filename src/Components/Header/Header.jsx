import React from 'react';
import styles from './Header.module.css';
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import {BsSuitHeart} from 'react-icons/bs';
const Header = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><AiFillHome/></li>
                <li><AiOutlineSearch/></li>
                <li>listenit</li>
                <li><BsSuitHeart/></li>
                <li><FaUserCircle/></li>
            </ul>
        </nav>
    );
}

export default Header;
