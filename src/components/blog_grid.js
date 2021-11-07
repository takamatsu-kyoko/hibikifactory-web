import React from "react"

import BlogCard from "./blog_card"

export default function BlogGrid({ blog_posts }) {
    return (
        <div>
            {
                blog_posts.map(blog => (
                    <BlogCard blog = { blog.node } key = { blog.node.id }/>
                ))
            }
        </div>
    )
}
