import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {

    const [textInput, setTextInput] = useState("")

    const handleChange = event => {
        setTextInput(event.target.value)
    }

    return (
        <>
            <div className="links-container">
                <Link to="/">Home</Link>
                <Link to="/sources">Sources</Link>
            </div>
            <div className="search-container">
                <i className="fas fa-search"></i>
                <input type="text" name="search" value={textInput} onChange={handleChange}/>
            </div>
        </>
    )
}

export default Nav