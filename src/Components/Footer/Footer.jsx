import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <footer className={styles.foot}>
            <span>
                project @ MCA 1<sup>st</sup> semester
            </span>
            <span>
                <Link>our team</Link>
            </span>
        </footer>
    );
}

export default Footer;
