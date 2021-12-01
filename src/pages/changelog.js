import React from "react"

import BaseLayout from '../layouts/base_layout'
import ChangeList from '../components/change_list'

export default function ChangeLog() {
    return (
        <BaseLayout>
            <h1>Change log</h1>
            <ChangeList/>
        </BaseLayout>
    )
}

