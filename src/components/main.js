import React from "react"
import mainStyles from "./main.module.css"

export default ({children}) => (
    <main className={mainStyles.main}>{children}</main>
)