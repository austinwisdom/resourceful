import "./LogInPage.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios, {AxiosError} from "axios";
import authIcons from "../../assets/images/auth-icons.png";
import purpleBlob from "../../assets/images/purple-blob.png";
import { LoggedIn, SetLoggedIn, LoginError, SubmitEvent, InputEvent, SetUserInfo } from "../../types/types";

interface Props { 
    setLoggedIn: SetLoggedIn
    loggedIn: LoggedIn;
}

const LogInPage:React.FC<Props> = ({setLoggedIn, loggedIn}) => {
    
    const navigate =  useNavigate()

    const [username, setUsername]: [username: string, setUsername: SetUserInfo] = useState("");
    const [password, setPassword]: [password: string, setPassword: SetUserInfo] = useState("");

    const loginSuccess = () => toast.success("User successfully logged in!")
    const loginFail = (errorMessage: string) => toast.error (`Login failed with error: ${errorMessage}`)

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();

        axios.defaults.withCredentials = true;
        axios
        .post("http://localhost:8080/users/login", {userName: username, password: password})
        .then(() => {
            setLoggedIn(true);
            loginSuccess();  
        })
        .catch ((error: AxiosError<LoginError>) => {
            const errorMessage = error.response?.data?.message ?? "Unknown error occurred";
            loginFail(errorMessage)
        })
      }  

      useEffect(()=> { 
        if (loggedIn) { 
            const timeout = setTimeout(() => { 
                navigate("/")
               }, 3000);
               return () => clearTimeout(timeout)
        }
      }, [loggedIn, navigate]) 
      
      const handleChangeUsername = (event: InputEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            value: string };
        const value = target.value;
        setUsername(value);
      }

      const handleChangePassword = (event: InputEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            value: string };
        const value = target.value;
        setPassword(value);
      }

    return (
        <section className="log-in">
            <div className="log-in__img-wrapper">
                <img src={authIcons} alt="icons" className="log-in__img-icons"/>
                <img src={purpleBlob} alt="blob" className="log-in__blob"/>
            </div>
            <form className="log-in__form" onSubmit={handleSubmit}>
                <div className="log-in__header">
                    <h1 className="log-in__title page-header">Welcome back</h1>
                    <p className="log-in__subheader paragraph">First time here?
                        <Link to="/sign-up" className="link">
                            <span className="span"> Create account.</span>
                        </Link>
                    </p>
                </div>
                <div className="log-in__field-container">
                        <label htmlFor="userName" className="log-in__label paragraph">Username</label>
                        <input 
                            name="userName" 
                            type="text" 
                            id="userName" 
                            className="form-field"
                            value={username}
                            onChange={handleChangeUsername}
                        />
                    </div>
                    <div className="log-in__field-container">
                        <label htmlFor="password" className="log-in__label paragraph">Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            id="password" 
                            className="form-field"
                            value={password}
                            onChange={handleChangePassword}
                        />
                    </div>
                    <div className="log-in__buttons">
                        <Link to="/" className="log-in__link">
                            <button className="log-in__button secondary-button button-medium label">Back</button>
                        </Link>
                        <button className="log-in__button primary-button button-medium label">Log in</button>
                    </div>
            </form>
            <ToastContainer position="bottom-center" theme="colored" hideProgressBar={true} className="log-in__notification"/>
        </section>
    )
}

export default LogInPage;