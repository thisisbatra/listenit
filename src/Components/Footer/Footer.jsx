import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <footer className={styles.foot}>
            <span>
               Minor Project @ MCA 1<sup>st</sup> Semester
            </span>
            <span>
                <Link to="/ourTeam">Our Team</Link>
            </span>
        </footer>
    );
}

export default Footer;
