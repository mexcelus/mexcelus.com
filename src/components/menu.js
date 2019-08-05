import React from 'react'
import Link from 'gatsby-link'
import tree from '../../content/images/mxcls.jpg'

const Menu = function menu() {
    return (
        <nav>
            <div className="nav-container">
                <div className="brand">
                    <Link to="/">
                        <img style={{
                            width: '50px', height: '50px', marginBottom: '0'}} src={tree} alt="Broccoli" />
                        <span className="text">Guillermo Villalta</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu;