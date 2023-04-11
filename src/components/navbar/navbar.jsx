import { Link } from "react-router-dom"
import { FaShoppingBasket, FaUser } from "react-icons/fa"
import './navbar.scss'
import { useState } from "react"

const Navbar = () => {
    const [bool, setBool] = useState(false)

    const DropDown = () => {
        setBool(!bool)
    }


    return (
        <div className="navbar">
            <Link to={"/"} className="logo">
                <h1>Logo</h1>
            </Link>

            <nav className="navigation">
                <Link className="link">
                    Home
                </Link>
                <div className="select-handler">
                    <button className="svg" onClick={() => DropDown()}>
                        <FaUser />
                    </button>
                    <div className={`select ${bool ? 'active' : null}`}>
                        <div className="option">
                            <p>profile</p>
                        </div>
                        <div className="option basket">
                            <FaShoppingBasket />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar