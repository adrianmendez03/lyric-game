import React from 'react'
import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar'

const Nav = () => {
    return (
        <>
            <div className="links-container">
                <Link to="/">Home</Link>
                <Link to="/sources">Sources</Link>
            </div>
            <SearchBar />
        </>
    )
}

export default Nav