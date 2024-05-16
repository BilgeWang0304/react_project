import "./Header.scss";
import Logo from "../images/lemonlogo.svg";
import { Link } from "react-router-dom";

const Header = ()=> {
    const handleScroll = () => {
        const ele = document.querySelector("#about");
        if (ele) {
          ele.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header>
            <div className="header-container">
                
                    <div className="logo">
                        <img src={Logo} alt="header-logo" height={70} />
                    </div>
                    <div className="menu-items">
                        <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={handleScroll}>
                            About
                            </Link>
                        </li>
                        <li>
                            <Link to="/404">Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservation">Reservation</Link>
                        </li>
                        <li>
                            <Link to="/404">Login</Link>
                        </li>
                        </ul>
                        <Link className="cta" to="/404">
                        Order Online
                        </Link>
                    </div>
                </div>
            
        </header>
    )
}

export default Header