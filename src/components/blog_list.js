import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BlogListItem from "./blog_list_item"

export default function BlogList() {
    const data =useStaticQuery(graphql`
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
    group(field: frontmatter___categories) {
      fieldValue
      edges {
        node {
          id
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
}
`)
    return (
        <section>
            <h2>Blog List</h2>
            {
                data.allMdx.group.map(category => (
                    <section key={ category.fieldValue }>
                        <h3>{ category.fieldValue }</h3>
                        <ul>
                            {
                                category.edges.map(list_item => (
                                    <BlogListItem key={ list_item.node.id } blog={ list_item.node } />
                                ))
                            }
                        </ul>
                    </section>
                ))
            }
        </section>
    )
}
