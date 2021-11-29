import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import BaseLayout from '../layouts/base_layout'
import BlogPagenation from '../components/blog_pagenation'

export default function BlogPost({ data, pageContext }) {
    return (
        <BaseLayout>
            <ul>
                <li>{pageContext.postFrontmatter.title }</li>
                <li>{pageContext.postFrontmatter.categories }</li>
                <li>{pageContext.postFrontmatter.published_on }</li>
                <li>{pageContext.postFrontmatter.updated_on }</li>
                <li>{pageContext.postFrontmatter.status }</li>
            </ul>
            <MDXRenderer>
            { data.mdx.body }
            </MDXRenderer>
            <BlogPagenation pagePos={pageContext.pagePos} />
            <ul>
                { pageContext.previous && <li>前の投稿:<Link to={`/blog/post/${pageContext.previous.slug}`}>{pageContext.previous.frontmatter.title}</Link></li> }
                { pageContext.next && <li>次の投稿:<Link to={`/blog/post/${pageContext.next.slug}`}>{pageContext.next.frontmatter.title}</Link></li> }
            </ul>
        </BaseLayout>
    )
}

export const query = graphql`
query($id: String!) {
  mdx(id: { eq: $id }) {
    frontmatter {
      title
      categories
      published_on
      updated_on
      status
    }
    body
  }
}
`
