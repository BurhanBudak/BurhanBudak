import React from "react"
import containerStyles from "./container.module.css"
//Varje component.js måste ha en module.css fil
export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)