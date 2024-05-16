import "./Footer.scss";
import footerLogo from "../images/small-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">               
                <img className="footer-logo" src = {footerLogo} alt = "logo-footer"></img>
                <div className="footer-guide">
                    <p className="footer-title"> GUIDE</p>
                    <Link className="footer-item" to="/">Home</Link>
                    <Link className="footer-item" to="/about">About</Link>
                    <Link className="footer-item" to="/menu">Menu</Link>                      
                    <Link className="footer-item" to="/reservations">Reservations</Link>
                    <Link className="footer-item" to="/order-online">Order Online</Link>
                    <Link className="footer-item" to="/login">Login</Link>
                </div>
                <div className="footer-find">
                    <p className="footer-title"> FIND US</p>
                    <p className="footer-item"> 123 Citrus Lane</p>
                    <p className="footer-item"> 123-456-7890</p>
                    <p className="footer-item"> little.lemon@lemon.com</p>
                </div>
                <div className="footer-social">
                <p className="footer-title"> CONTACT</p>
                <a className="footer-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faFacebook} />
                    Facebook</a>
                <a className="footer-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faInstagram} />
                    Instagram</a>
                <a className="footer-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                    Twitter</a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;