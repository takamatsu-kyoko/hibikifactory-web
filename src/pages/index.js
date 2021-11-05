import React from "react"

import HomeLayout from '../layouts/home_layout'
import WhatsNew from '../components/whatsnew'
import BlogGrid from '../components/blog_grid'

export default function Home() {
    return (
        <HomeLayout>
            <WhatsNew />
            <BlogGrid />
        </HomeLayout>
    )
}
