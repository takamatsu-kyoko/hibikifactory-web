import React from "react"
import { graphql } from "gatsby"

import BaseLayout from '../../layouts/base_layout'
import BlogGrid from '../../components/blog_grid'

export default function BlogIndex({ data }) {
    return (
        <BaseLayout>
            <h1>Blog Index</h1>
            <BlogGrid blog_posts={ data.allMdx.edges }/>
        </BaseLayout>
    )
}

export const query = graphql`
query {
  allMdx(
    filter: {
      fields: {
        fileSourceInstanceName: {eq: "blog"},
        fileName: {eq: "index"}
      },
      frontmatter: {status: {nin: ["draft"]}}
    }
    sort: {fields: frontmatter___published_on, order: DESC}
  ) {
    edges {
      node {
        id
        slug
        frontmatter {
          title
          categories
          published_on(formatString: "YYYY-MM-DD")
          updated_on(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
}
`
