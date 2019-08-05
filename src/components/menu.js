import React from 'react'
import Link from 'gatsby-link'
import tree from '../../content/images/bigLogo.png'

const Menu = function menu() {
    return (
        <nav style={{
            background: `#3CB371`,
            paddingTop: '20px',
            paddingBottom: '20px',
            width: '80%',
            margin: 'auto'
        }}>
            <div className="nav-container">
                <div className="brand">
                    <Link to="/">
                        <img style={{
                            width: '250px', height: '40px', marginBottom: '0'}} src={tree} alt="Broccoli" />
                        {/* <span className="text">MEXCELUS</span> */}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu;