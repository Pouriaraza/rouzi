import Logo from "../images/logo.png";

const Header = () => {

    return (
        <div className="header">
            <div className="menu-outer">
                <div className="header-logo-container">
                    <img src={Logo} />
                </div>
                <div className="header-items-container">
                    <nav>
                        <ul>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Restaurant</a></li>
                            <li><a href="#">Stop-Motion</a></li>
                            <li><a href="#">À propos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
