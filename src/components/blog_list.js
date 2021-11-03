import React from "react"

import BlogListItem from "./blog_list_item"

export default function BlogList() {
    return (
        <section>
            <h2>Blog List</h2>
            <h3>Category1</h3>
            <ul>
                <BlogListItem blog="blog list item 1-1" />
                <BlogListItem blog="blog list item 1-2" />
                <BlogListItem blog="blog list item 1-3" />
            </ul>
            <h3>Category2</h3>
            <ul>
                <BlogListItem blog="blog list item 2-1" />
                <BlogListItem blog="blog list item 2-2" />
                <BlogListItem blog="blog list item 2-3" />
            </ul>
            <h3>Category3</h3>
            <ul>
                <BlogListItem blog="blog list item 3-1" />
                <BlogListItem blog="blog list item 3-2" />
                <BlogListItem blog="blog list item 3-3" />
            </ul>
        </section>
    )
}
