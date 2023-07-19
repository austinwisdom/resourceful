import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import axios, { AxiosError } from "axios";
import { SetLoggedIn, ClickEvent } from "../../types/types";



const HeaderLoggedIn = ({ setLoggedIn }: {setLoggedIn: SetLoggedIn}) => {
   

    const logOutHandler = (e: ClickEvent) => {
        e.preventDefault();
       
        axios
        .get("http://localhost:8080/users/logout")
        .then(() => {
            setLoggedIn(false);
            window.location.reload() 
        })
        .catch ((error: AxiosError) => {
            console.error(error)
        })
      }  

    return (
        <header className="header">
        <Link to="/" className="header__logo-link">
            <img src={logo} alt="logo" className="header__logo"/>
        </Link>
        <div className="header__buttons">
            <button className="header__button primary-button button-small label" onClick={logOutHandler}>Log out</button>
        </div>
    </header>
    )
}

export default HeaderLoggedIn;