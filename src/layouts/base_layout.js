import React from 'react'

import Header from '../components/header'
import SideBar from '../components/side_bar'
import Footer from '../components/footer'

export default function BaseLayout({pagetitele, children}) {
    return (
        <div>
            <Header />
            <main>
                { children }
            </main>
            <SideBar />
            <Footer />
        </div>
    )
}
