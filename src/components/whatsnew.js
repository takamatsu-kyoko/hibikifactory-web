import React from "react"

import ChangeList from '../components/change_list'

export default function WhatsNew() {
    return (
        <section>
            <h2>Whats New!</h2>
            <ChangeList limit='10' />
        </section>
    )
}
