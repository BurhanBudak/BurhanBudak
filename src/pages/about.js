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
    <p style={{maxWidth:`400px`}}>Hi, my name is Burhan Budak and right now I am studying to become a Front-end developer at Nackademin vocational school. In my education I learn everything in web development such as JavaScript, HTML, CSS, frameworks and some back-end. The reason I chose Front-end is because I have noticed how the web is growing and how web development is important for the presentation of information.</p>
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
