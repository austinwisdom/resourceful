import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import "./Header.scss";


const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <img src={logo} alt="logo" className="header__logo"/>
            </Link>
            <div className="header__buttons">
                <Link to="/log-in" className="header__link">
                    <button className="header__button primary-button button-small label">Log in</button>
                </Link>
                <Link to="/sign-up" className="header__link">
                    <button className="header__button secondary-button button-small label">Sign up</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;