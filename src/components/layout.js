import React from "react"
import Footer from "../components/footer"
import Container from "../components/container"


export default ({ children }) => (
  <Container>
    {children}
   
    <Footer>
    </Footer>
  </Container>
)