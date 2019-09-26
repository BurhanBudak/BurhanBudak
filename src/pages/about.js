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
        {/* <img alt="burhan" src={"/img/profilbild2.jpg"} style={{borderRadius: `50%`, width:`300px`,height:`300px`}}></img> */}
        <Img
        fluid={data.image.childImageSharp.fluid}
        />
      <figcaption>
    <p style={{maxWidth:`400px`}}>Hej, mitt namn är Burhan Budak och just nu studerar jag till Front-end utvecklare hos yrkeshögskolan Nackademin. I min utbildning så lär jag mig allt inom webbutveckling som JavaScript,HTML, CSS, ramverk och lite back-end. Anledningen för att jag valde Front-end är för att jag har märkt hur webben växer och hur webbutveckling är viktigt för spridningen av information.</p>
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
