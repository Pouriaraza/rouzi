import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import react, { useState } from "react";
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="header">
            <div className="menu-outer">
                <button className="mobile-menu"
                    onClick={() => setIsMobile(!isMobile)}> ok </button>
                <div className="header-logo-container">
                    <img src={Logo} />
                </div>
                <div className={isMobile ? "now-mobile" : "header-items-container"}
                    onClick={() => setIsMobile(false)} >
                    <nav>
                        <button className="mobile-menu"
                            onClick={() => setIsMobile(!isMobile)}> ok </button>
                        <ul>
                            <Link to="/Food">Food</Link>
                            <Link to="/Restaurant">Restaurant</Link>
                            <Link to="/Motion">Stop-Motion</Link>
                            <Link to="/propos">À propos</Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;
