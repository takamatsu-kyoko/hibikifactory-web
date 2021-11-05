import React from "react"

import BlogCardItem from "./blog_card_item"

export default function BlogGrid() {
    return (
        <section>
            <h2>Blog Grid</h2>
            <BlogCardItem blog="blog card item 1" />
            <BlogCardItem blog="blog card item 2" />
            <BlogCardItem blog="blog card item 3" />
            <BlogCardItem blog="blog card item 4" />
        </section>
    )
}
