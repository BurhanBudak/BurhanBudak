import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
import Img from "gatsby-image"
import { graphql } from "gatsby"
const Index = ({data}) => {
  return (
    <Layout>
    <Header color='yellow' >
    </Header>
    <Main headerText="Front-end developer"> 
        
        <Img
        fluid={data.image.childImageSharp.fluid}
        />
      <figcaption>
    <p>
    Hi my name is Burhan and I am a dedicated problem solver with an interest in digital presentation through code. Right now I am looking for an internship as a front-end developer and studying Lexicon's labor market training to further develop my basics in effective Front-end code I learned at Nackademin polytechnic.</p>
      </figcaption> 
    </Main>
    </Layout>
  )
}

export default Index;

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

