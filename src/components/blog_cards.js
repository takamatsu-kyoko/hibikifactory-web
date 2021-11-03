import React from "react"

import BlogCardItem from "./blog_card_item"

export default function BlogCards() {
    return (
        <section>
            <h2>Blog Cards</h2>
            <BlogCardItem blog="blog card item 1" />
            <BlogCardItem blog="blog card item 2" />
            <BlogCardItem blog="blog card item 3" />
            <BlogCardItem blog="blog card item 4" />
        </section>
    )
}
