import React from "react"

import Layout from "../components/layout"

const MePage = ({ data }) => (
    <Layout>
        <div>
            <br></br>
            <br></br>
            <br></br>
        <h1>Resume</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div hey={post.node.id}>
                <h1 style={{ color: "#3CB371"}}>
                    {post.node.frontmatter.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
                <br />
                <br />
            </div>
        ))}
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query MeIndexQuery {
        allMarkdownRemark (filter: {frontmatter: {slug: {eq: "resume"}}}){
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        slug
                        template
                    }
                    html
                }
            }
        }
    }
`
export default MePage