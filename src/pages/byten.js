import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

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

                    )

                })}
            </ol>
        </Layout>
    )
}
export default Byten