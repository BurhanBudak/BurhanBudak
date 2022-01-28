import React from "react"
import { FaGithub } from 'react-icons/fa';
import footerStyles from "./footer.module.css"


export default () => (
  <footer className={footerStyles.footer}>
    <h4>Links to my socialmedia and repo</h4>
    <div className={footerStyles.middle}>
      <div>
        <a
          href="https://github.com/BurhanBudak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaGithub />
        </a>
      </div>
    </div>
    <small>Copyright: 2019 © Burhan Budak</small>
  </footer>
)