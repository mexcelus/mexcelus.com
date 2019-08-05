import React from 'react'
import Link from 'gatsby-link'
import tree from '../../content/images/test.png'

const Menu = function menu() {
    return (
        <nav>
            <div className="nav-container">
                <div className="brand">
                    <Link to="/">
                        <img style={{
                            width: '50px', height: '50px', marginBottom: '0'}} src={tree} alt="Broccoli" />
                        <span className="text">mexcelus.io</span>
                    </Link>
                </div>
                <div className="links">
                    <a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/taniarascia">
                        about
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/taniarascia">
                        blog
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/taniarascia">
                        contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Menu;