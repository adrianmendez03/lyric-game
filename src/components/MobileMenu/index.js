import React, { useState } from 'react'

import Nav from '../Nav'
import './mobilemenu.css'

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuIconClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    const renderMenuIcon = () => {
        return isOpen ? (
            <div className="mobile-menu-icon open" onClick={handleMenuIconClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        ) : (
            <div className="mobile-menu-icon closed" onClick={handleMenuIconClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    const renderMenu = () => {
        return isOpen ?  (
                <div className="menu-container nav-open" onClick={event => event.stopPropagation()}>
                    <Nav />
                </div>
        ) : (
            <div className="menu-container nav-closed"></div>
        )
    }

    const renderBackground = () => {
        return isOpen ? (
            <div className="menu menu-open" onClick={() => setIsOpen(false)}></div>
        ) : (
            <div className="menu menu-closed"></div>
        )
    }

    return (
        <>
            {renderBackground()}
            {renderMenu()}
            {renderMenuIcon()}
        </>
    )
}

export default Menu