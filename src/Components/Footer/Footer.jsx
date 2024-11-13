import React from 'react';
import styles from "./Footer.module.css";
const Footer = () => {
    const openNewWindow=()=>{
        window.open("https://github.com/thisisbatra/listenit",'_blank');
    }
    return (
        <footer className={styles.foot}>
           <h1>
                bringing ideas to life - nitin batra &copy; 2024 | 
                <span id='documentation' onClick={openNewWindow} className={styles.doc}>
                    detailed documentation
                </span>
            </h1>
        </footer>
    );
}

export default Footer;
