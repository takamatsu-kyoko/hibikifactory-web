import React from "react"
import { Link } from "gatsby"

export default function BlogCard({ blog }) {
    return (
        <dl>
            <dt>Title</dt>
            <dd><Link to={`/blog/post/${blog.slug}`}>{ blog.frontmatter.title }</Link></dd>
            <dt>Categories</dt>
            <dd>{ blog.frontmatter.categories }</dd>
            <dt>publised_on</dt>
            <dd>{ blog.frontmatter.published_on }</dd>
            <dt>update_on</dt>
            <dd>{ blog.frontmatter.updated_on }</dd>
        </dl>
    )
}
