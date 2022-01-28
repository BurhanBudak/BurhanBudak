import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
import Img from "gatsby-image"
import { graphql } from "gatsby"
const About = ({data}) => {



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
    Hej mitt namn är Burhan och jag är en dedikerad problemlösare med intresse för digital presentation genom kod.  Just nu söker jag praktik som frontend utvecklare och pluggar Lexikons arbetsmarknadsutbildning för att vidare utveckla mina grunder inom effektiv Frontend-kod jag lärde mig hos Nackademin yrkeshögskola.
    </p>
      </figcaption> 
    </Main>
        </Layout>
)
}

export default About;


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
