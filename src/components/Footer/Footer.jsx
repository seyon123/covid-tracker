import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Made with ❤ by
                <a
                    href="https://github.com/seyon123"
                    target="_blank"
                    rel="noopener noreferrer"
                > Seyon Rajagopal </a>
                <br/>
                Source : 
                <a
                    href="https://github.com/CSSEGISandData/COVID-19"
                    target="_blank"
                    rel="noopener noreferrer"
                > Johns Hopkins University </a> & 
                <a
                    href="https://www.worldometers.info/coronavirus/"
                    target="_blank"
                    rel="noopener noreferrer"
                > Worldometers </a>
            </p>
        </footer>
    );
};

export default Footer;
