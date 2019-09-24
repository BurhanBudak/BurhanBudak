import React from "react"
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import footerStyles from "./footer.module.css"


export default () => (
    <footer className={footerStyles.footer}>
        <h4>Links to my personal socialmedia</h4>
        <div className={footerStyles.middle}>
            <div><a href="https://twitter.com/BurhanB98039015" target="_blank" rel="noopener"><FaTwitter/></a></div>
            <div><a href="https://github.com/BurhanBudak" target="_blank"  rel="noopener"><FaGithub/></a></div>
            <div><a href="https://www.linkedin.com/in/burhan-budak-6921b2130/" target="_blank"  rel="noopener"><FaLinkedinIn/></a></div>
        </div>
        <small>Skapare: 2019 © Burhan</small>
    </footer>
)