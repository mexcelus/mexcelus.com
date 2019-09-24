import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = ({data}) => (
    <Layout>
        <div className="centered-content">
            <br></br>
            <br></br>
            <br></br>
        <h1 style={{ paddingLeft: "0px" }}>Latest Posts!</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div hey={ post.node.id }>
                <img src={require("../images/gatsby-icon.png")} alt="thumbnail" className="post-thumbnail"/>
                <h3>
                    {post.node.frontmatter.title}
                </h3>
                <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br />
                <br />
                <hr />
            </div>
        ))}
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark (filter: {frontmatter: {slug: {eq: "blogpost"}}}){
            edges {
                node {
                    id
                    frontmatter {
                        author
                        date
                        path
                        title
                    }
                }
            }
        }
    }
`
export default BlogPage