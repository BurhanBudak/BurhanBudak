import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, color: 'white'}}>
      <Link style={{textDecoration: 'none', borderColor:props.color}} to={props.to}>{props.children}</Link>
    </li>
  )

export default (props) => (
   
      <header className={headerStyles.header}>
        <Link className={headerStyles.logo} to="/" style={{ textShadow: `none`,  textDecoration:'none',}}>
        <span className={headerStyles.span} style={{backgroundColor:props.color}} >BB</span>
          <h1 className={headerStyles.header_h1} style={{ color:'white', }}>BURHAN BUDAK</h1>
        </Link>
        
    <nav>
        <ul className={headerStyles.ull} >
          <ListLink color='#16a085' to="/project/">Projects</ListLink>
          <ListLink color="#e74c3c" to="/about/">About</ListLink>
          <ListLink color="#2980b9" to="/contact/">Contact</ListLink>
        </ul>
    </nav>
    
      </header> 
  )