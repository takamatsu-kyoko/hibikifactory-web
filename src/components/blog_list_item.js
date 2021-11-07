import React from "react"
import { Link } from "gatsby"

export default function BlogListItem({ blog }) {
    return (
        <li>
            <Link to={`/blog/post/${blog.slug}`}>{ blog.frontmatter.title }</Link>
        </li>
    )
}
