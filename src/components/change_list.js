import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ChangeListItem from "./change_list_item"

export default function ChangeList({ limit = undefined }) {
    const query =useStaticQuery(graphql`
query {
  change_log: allChangelogYaml(sort: {fields: date, order: DESC}) {
    nodes {
      id
      date(formatString: "YYYY-MM-DD")
      summary
      description
      url
      slug
    }
  }
  recent_posts: allMdx(
    filter: {
      fields: {
        fileSourceInstanceName: {eq: "blog"},
        fileName: {eq: "index"}
      },
      frontmatter: {status: {nin: ["draft"]}}
    }
    sort: {fields: frontmatter___published_on, order: DESC}
  ) {
    nodes {
      id
      slug
      frontmatter {
        title
        published_on(formatString: "YYYY-MM-DD")
      }
    }
  }
  recent_updates: allMdx(
    filter: {
      fields: {
        fileSourceInstanceName: {eq: "blog"},
        fileName: {eq: "index"}
      },
      frontmatter: {status: {nin: ["draft"]}}
    }
    sort: {fields: frontmatter___updated_on, order: DESC}
  ) {
    nodes {
      id
      slug
      frontmatter {
        title
        updated_on(formatString: "YYYY-MM-DD")
      }
    }
  }
}
`)
    let updates = []
    for (let item of query.change_log.nodes) {
        updates.push({
            id: item.id,
            type: 'changelog',
            date: item.date,
            summary: item.summary,
            description: item.description,
            url: item.url,
            slug: item.slug,
        })
    }

    for (let item of query.recent_updates.nodes) {
        if (item.frontmatter.updated_on === null) {
            continue
        }
        updates.push({
            id: item.id,
            type: 'update',
            date: item.frontmatter.updated_on,
            summary: item.frontmatter.title,
            url: null,
            slug: item.slug,
        })
    }

    for (let item of query.recent_posts.nodes) {
        updates.push({
            id: item.id,
            type: 'post',
            date: item.frontmatter.published_on,
            summary: item.frontmatter.title,
            url: null,
            slug: item.slug,
        })
    }

    updates.sort((a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
    })

    return (
        <ul>
            {
                updates.slice(0, limit ? parseInt(limit) : undefined).map( update  => (
                    <ChangeListItem key={ update.id } update={ update } />
                ))
            }
        </ul>
    )
}
