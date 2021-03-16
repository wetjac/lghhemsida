import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Lägenhetsbyte</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/byten">Bytesförslag</Link>
                    </li>
                    <li>
                    <Link to="/profilepage">Profil</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header