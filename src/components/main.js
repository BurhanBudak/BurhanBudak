import React from "react"
import * as styles from  "./main.module.css"

const Main = (props) => (
   
    <main className={styles.main}>
        <h1>{props.headerText}</h1>
    {props.children}
    </main>
)
export default Main