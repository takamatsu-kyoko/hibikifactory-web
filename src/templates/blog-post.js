import React from "react"
import { graphql } from "gatsby"

import BaseLayout from '../layouts/base_layout'

export default function BlogPost({ data }) {
    return (
        <BaseLayout>
            <h1>{ data.mdx.frontmatter.title }</h1>
        </BaseLayout>
    )
}

export const query = graphql`
query($id: String!) {
  mdx(id: { eq: $id }) {
    frontmatter {
      title
    }
  }
}
`
