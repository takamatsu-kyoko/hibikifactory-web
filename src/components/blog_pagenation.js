import React from "react"
import { Link } from "gatsby"


export default function BlogPagenation( {pagePos} ) {
    if (pagePos.totalPages === 1) {
        return null
    }
    // FIXME
    return (
        <ul>
            {
                Array.from(Array(pagePos.totalPages), (_, k) => (
                    <li key={k}>
                        {
                            k + 1 === pagePos.currentPage ?
                                <span>{ k + 1 }</span> :
                            <Link to={
                                      k === 0 ?
                                          `/blog/post/${pagePos.firstPageSlug}` :
                                          `/blog/post/${pagePos.firstPageSlug}${ k+1 }`
                                  }>{ k + 1 }</Link>
                        }
                    </li>
                ))
            }
        </ul>
    )
}
