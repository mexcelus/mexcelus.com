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
                            width: '45px', height: '45px', marginBottom: '0'}} src={tree} alt="Broccoli" />
                        <span className="text">mexcelus.com</span>
                    </Link>
                </div>
                <div className="links">
                        <Link to="/me">me</Link>

                        <Link to="/contact">contact</Link>
              
                        <Link to="/blog">blog</Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu;