import "./LogInPage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import authIcons from "../../assets/images/auth-icons.png";
import purpleBlob from "../../assets/images/purple-blob.png";

const LogInPage = () => {

    const [username, setUsername]: [username: string, setUsername: React.Dispatch<React.SetStateAction<string>>] = useState("");
    const [password, setPassword]: [password: string, setPassword: React.Dispatch<React.SetStateAction<string>>] = useState("");
    const [loginMessage, setLoginMessage]: [loginMessage: string, setLoginMessage:React.Dispatch<React.SetStateAction<string>>] =useState("")

    type Login = {userName:string}
    type LoginError = {message:string}

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.defaults.withCredentials = true;
        axios
        .post("http://localhost:8080/users/login", {userName: username, password: password})
        .then((res:AxiosResponse<Login>) => {
            setLoginMessage(`Welcome back ${res.data.userName}`)
        })
        .catch ((error: AxiosError<LoginError>) => {
            const errorMessage = error.response?.data?.message ?? "Unknown error occurred";
            setLoginMessage(`Login failed with error: ${errorMessage}`);
        })
      }  
    
      const handleChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            value: string };
        const value = target.value;
        setUsername(value);
        console.log(username);
      }

      const handleChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
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
                    <span className="log-in__message">{loginMessage}</span>
            </form>
        </section>
    )
}

export default LogInPage;