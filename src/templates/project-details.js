import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    // console.log(featuredImg)

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="image-banner" />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
            childImageSharp {
                gatsbyImageData
            }
        }
      }
    }
  }
`
