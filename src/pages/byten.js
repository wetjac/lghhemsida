import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"

const Byten = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges{
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <h1>Bytessida</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                        <Link to={`/byten/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default Byten