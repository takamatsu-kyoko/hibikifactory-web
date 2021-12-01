import React from "react"
import { Link } from "gatsby"

export default function MainMenu() {
    return (
        <nav>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/blog/`}>Blog</Link></li>
                <li>About</li>
                <li><Link to={`/changelog/`}>Log</Link></li>
            </ul>
        </nav>
    )
}
