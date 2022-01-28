import React from "react"
import { Link } from "gatsby"
import * as styles from  "./header.module.scss"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, color: 'white'}}>
      <Link style={{textDecoration: 'none', borderColor:props.color}} to={props.to}>{props.children}</Link>
    </li>
  )

const Header = (props) => (
   
      <header className={styles.header}>
        <Link className={styles.logo} to="/" style={{ textShadow: `none`,  textDecoration:'none',}}>
        <span className={styles.span} style={{backgroundColor:props.color}} >BB</span>
          <h1 className={styles.header_h1} style={{ color:'white', }}>BURHAN BUDAK</h1>
        </Link>
        
    <nav>
        <ul className={styles.ull} >
          <ListLink color="#e74c3c" to="/project/">Projects</ListLink>
          <ListLink color="#2980b9" to="/contact/">Contact</ListLink>
        </ul>
    </nav>
    
      </header> 
)
  
export default Header