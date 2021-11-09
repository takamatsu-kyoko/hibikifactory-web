import React from "react"
import { graphql } from "gatsby"

import HomeLayout from '../layouts/home_layout'
import WhatsNew from '../components/whatsnew'
import BlogGrid from '../components/blog_grid'

export default function Home({data}) {
    return (
        <HomeLayout>
            <WhatsNew />
            <section>
                <h2>Blog Grid</h2>
                <BlogGrid blog_posts={ data.recent_posts.edges }/>
            </section>
        </HomeLayout>
    )
}
export const query = graphql`
query {
  recent_posts: allMdx(
    filter: {
      fields: {
        fileSourceInstanceName: {eq: "blog"},
        fileName: {eq: "index"}
      },
      frontmatter: {status: {nin: ["draft"]}}
    }
    sort: {fields: frontmatter___published_on, order: DESC}
    limit: 10
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
