import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {

    const [textInput, setTextInput] = useState("")

    const handleChange = event => {
        setTextInput(event.target.value)
    }
    
    return (
        <div className="search-container">
            <input type="text" name="search" value={textInput} onChange={handleChange} autoComplete="off"/>
            <Link to={`/search/${textInput}`}>Search</Link>
        </div>
    )
}

export default SearchBar