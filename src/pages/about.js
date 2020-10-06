import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
import Img from "gatsby-image"
import { graphql } from "gatsby"
export default ({data}) => {



console.log(data)
  return(


        <Layout>
            <Header color="#e74c3c">
        </Header>
        <Main headerText="About me">
        <Img
        fluid={data.image.childImageSharp.fluid}
        />
      <figcaption>
    <p style={{maxWidth:`400px`}}> 
    Hi, my name is Burhan Budak and a newly graduated Front-end developer from Nackademin vocational school.
      At Nackademin I have worked with several projects where I have developed my knowledge in JavaScript basics, HTML, modern CSS, testing with JEST and Cypress, JavaScript libraries and frameworks through group assignments or independent studies.
    </p>
      </figcaption> 
    </Main>
        </Layout>
)
}


export const query = graphql`
    query {
      image: file(relativePath: {eq: "profilbild2.jpg"}) {
        id
        childImageSharp {
          fixed{
            ...GatsbyImageSharpFixed
          }
          fluid
          {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    
  `
