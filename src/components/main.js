import React from "react"
import mainStyles from "./main.module.css"

export default (props) => (
   
    <main className={mainStyles.main}>
        <h1>{props.headerText}</h1>
    {props.children}
    </main>
)