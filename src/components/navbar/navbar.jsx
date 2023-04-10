import { Link } from "react-router-dom"

import './navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={"/"} className="logo">
                <h1>Logo</h1>
            </Link>

            <nav className="navigation">
                <Link className="link" to={"/"}>Home</Link>
            </nav>
        </div>
    )
}

export default Navbar