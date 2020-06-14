import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/top-headlines">Top Headlines</Link>/
            <Link to="/news">News</Link>/
            <Link to="/sources">Sources</Link>
        </div>
    )
}
export default Navbar