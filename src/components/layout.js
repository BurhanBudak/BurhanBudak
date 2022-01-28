import React from "react"
import Footer from "../components/footer"
import Container from "../components/container"

const Layout = ({ children }) => (
  <Container>
    {children}
   
    <Footer>
    </Footer>
  </Container>
)
export default Layout