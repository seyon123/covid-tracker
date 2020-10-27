import React from "react";

import styles from "./Header.module.css";

const Footer = () => {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.logo}>
                C<img src="logo.png" width="30" alt="logo" />
                VID-19 Tracker
            </h1>
            <div id="modeToggle" className={styles.modeToggle}><i className="far fa-moon"></i></div>
        </div>
    );
};

export default Footer;
