import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
export default () => {
  return (
    <Layout>
    <Header color='yellow' >
    </Header>
    <Main headerText="Burhan Budak"> 
    <h2 style={{color:'yellow'}} >- Front-end student</h2>
    </Main  >
    </Layout>
  )
}

