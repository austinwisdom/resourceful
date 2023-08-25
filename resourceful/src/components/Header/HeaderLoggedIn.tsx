import { Link } from "react-router-dom";
import { SetLoggedIn} from "../../types/types";
import { logOutHandler } from "../../utilities/handlers";
import logo from "../../assets/images/Logo.svg";
import "./Header.scss";

const HeaderLoggedIn = ({ setLoggedIn }: {setLoggedIn: SetLoggedIn}) => {

    return (
        <header className="header">
        <Link to="/" className="header__logo-link">
            <img src={logo} alt="logo" className="header__logo"/>
        </Link>
        <button className="header__button primary-button button-small label" onClick={(e) => logOutHandler(e, setLoggedIn)}>Log out</button>
    </header>
    )
}

export default HeaderLoggedIn;