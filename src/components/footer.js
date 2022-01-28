import React from "react"
import { FaGithub } from 'react-icons/fa';
import * as styles from  "./footer.module.css"


const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.middle}>
            <div><a href="https://github.com/BurhanBudak" target="_blank"  rel="noopener noreferrer" aria-label="github"><FaGithub/></a></div>
        </div>
        <small>Copyright: 2019 © Burhan Budak</small>
    </footer>
)
export default Footer