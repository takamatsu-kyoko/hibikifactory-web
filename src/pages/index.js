import React from "react"

import HomeLayout from '../layouts/home_layout'
import WhatsNew from '../components/whatsnew'
import BlogCards from '../components/blog_cards'

export default function Home() {
    return (
        <HomeLayout>
            <WhatsNew />
            <BlogCards />
        </HomeLayout>
    )
}
