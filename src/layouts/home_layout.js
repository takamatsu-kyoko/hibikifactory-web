import React from 'react'

import Header from '../components/header'
import Hero from '../components/hero'
import SideBar from '../components/side_bar'
import Footer from '../components/footer'

export default function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <Hero />
            <main>
                { children }
            </main>
            <SideBar />
            <Footer />
        </div>
    )
}
