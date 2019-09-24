import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
export default ({ data }) => {
   
  
        
    console.log(data)
    return (
      <Layout>
        <Header color='#16a085'>
        </Header>
        <Main>
        <div>
          
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <div dangerouslySetInnerHTML={{__html:node.html}}>

              </div>
            </div>
          ))}
        </div>
        </Main>
      </Layout>
    )
  }
  export const query = graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            html
          }
        }
      }
    }
  `
