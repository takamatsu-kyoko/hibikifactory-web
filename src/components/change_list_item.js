import React from "react"

export default function ChangeListItem({ update }) {
    return (
        <li>{ `${update.type}: ${update.summary} (${update.date})` }</li>
    )
}
