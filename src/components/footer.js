import React from "react"
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import footerStyles from "./footer.module.css"


export default () => (
    <footer className={footerStyles.footer}>
        <h4>Links to my socialmedia and repo</h4>
        <div className={footerStyles.middle}>
            <div><a href="https://twitter.com/BurhanB98039015" target="_blank" rel="noopener noreferrer"><FaTwitter/></a></div>
            <div><a href="https://github.com/BurhanBudak" target="_blank"  rel="noopener noreferrer"><FaGithub/></a></div>
            <div><a href="https://www.linkedin.com/in/burhan-budak-6921b2130/" target="_blank"  rel="noopener noreferrer"><FaLinkedinIn/></a></div>
        </div>
        <small>Copyright: 2019 © Burhan Budak</small>
    </footer>
)