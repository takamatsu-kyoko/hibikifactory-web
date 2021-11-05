import React from "react"

import BlogCard from "./blog_card"

export default function BlogGrid() {
    return (
        <section>
            <h2>Blog Grid</h2>
            <BlogCard blog="blog card item 1" />
            <BlogCard blog="blog card item 2" />
            <BlogCard blog="blog card item 3" />
            <BlogCard blog="blog card item 4" />
        </section>
    )
}
